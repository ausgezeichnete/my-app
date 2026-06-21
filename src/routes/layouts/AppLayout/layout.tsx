import { Outlet, Link, data } from "react-router-dom";
import { AppChip } from "@/common/appChip/appChip";
import { AppButton } from "../../../common/appButon/appButton";
import {
  AppTable,
  productTableHeaders,
  tableColumnsHeaders,
  tableData,
  productData,
} from "../../../common/appTable/appTable";

export default function Layout() {
  return (
    <>
      <main>
        <h1>App Layout</h1>
        <AppChip chipText="This is an App Chip" status="inactive" />
        <AppChip chipText="This is an App Chip" status="active">
          Click Here
        </AppChip>
        <AppButton
          text="view"
          onClick={() => alert("Button Clicked")}
          status="view"
        />
        <AppTable
          columns={tableColumnsHeaders}
          data={tableData}
          loading={false}
        />
        <AppTable
          columns={productTableHeaders}
          data={productData}
          loading={false}
        />

        <Outlet />
      </main>
    </>
  );
}
