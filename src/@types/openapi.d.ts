import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        export interface SalesLine {
            id: string;
            sequence: number; // int32
            itemId: string;
            description: string;
            quantity: number; // decimal
            unitPrice: number; // decimal
            amountExcludingTax: number; // decimal
            totalTaxAmount: number; // decimal
            amountIncludingTax: number; // decimal
        }
        export interface SalesOrder {
            id: string;
            number: string;
            orderDate: string; // date
            customerName: string;
            salesperson: string;
            totalAmountExcludingTax: number; // decimal
            totalTaxAmount: number; // decimal
            totalAmountIncludingTax: number; // decimal
            salesOrderLines?: SalesLine[];
        }
        export interface SalesOrderResponse {
            "@odata.context": string;
            "@odata.count"?: number; // int32
            value: SalesOrder[];
        }
    }
}
declare namespace Paths {
    namespace SalesOrder {
        namespace Parameters {
            export type $Expand = "salesOrderLines";
            export type CompanyId = string; // uuid
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId /* uuid */;
        }
        export interface QueryParameters {
            $expand?: Parameters.$Expand;
        }
        namespace Responses {
            export type $200 = Components.Schemas.SalesOrderResponse;
        }
    }
}


export interface OperationMethods {
  /**
   * SalesOrder - Returns list of Sales Orders
   */
  'SalesOrder'(
    parameters?: Parameters<Paths.SalesOrder.QueryParameters & Paths.SalesOrder.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SalesOrder.Responses.$200>
}

export interface PathsDictionary {
  ['/companies({companyId})/salesOrders']: {
    /**
     * SalesOrder - Returns list of Sales Orders
     */
    'get'(
      parameters?: Parameters<Paths.SalesOrder.QueryParameters & Paths.SalesOrder.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SalesOrder.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>


export type SalesLine = Components.Schemas.SalesLine;
export type SalesOrder = Components.Schemas.SalesOrder;
export type SalesOrderResponse = Components.Schemas.SalesOrderResponse;
