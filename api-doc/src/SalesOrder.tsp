import "@typespec/http";
import "@typespec/openapi";

using TypeSpec.Http;
using TypeSpec.OpenAPI;

@service(#{ title: "Business Central Sales Order API" })
@server("https://api.businesscentral.dynamics.com/v2.0/<tenantId>/<env>/", "Business Central API Server")
namespace hpeide.Sales {
  model SalesLine {
    id: string;
    sequence: int32;
    itemId: string;
    description: string;
    quantity: decimal;
    unitPrice: decimal;
    amountExcludingTax: decimal;
    totalTaxAmount: decimal;
    amountIncludingTax: decimal;
  }

  model SalesOrder {
    id: string;
    number: string;
    orderDate: plainDate;
    customerName: string;
    salesperson: string;
    totalAmountExcludingTax: decimal;
    totalTaxAmount: decimal;
    totalAmountIncludingTax: decimal;
    salesOrderLines?: SalesLine[];
  }

  model SalesOrderResponse {
    @encodedName("application/json", "@odata.context")
    odataContext: string;

    @encodedName("application/json", "@odata.count")
    odataCount?: int32;

    value: SalesOrder[];
  }

  @route("/companies({companyId})/salesOrders")
  @tag("Sales")
  interface SalesOrders {
    @get
    @operationId("listSalesOrders")
    @summary("Returns list of Sales Orders")
    list(
      @path
      @doc("Id for company")
      @format("uuid")
      companyId: string,

      @query
      @doc("Expand related entities")
      $expand?: "salesOrderLines",
    ): SalesOrderResponse;
  }
}
