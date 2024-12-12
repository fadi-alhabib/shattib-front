import {
  boxIcon,
  docIcon,
  homeIcon,
  Link,
  redLogoutIcon,
  SidePanelItem,
  smallShattibIcon,
  twoPapersIcon,
} from "..";

const AdminSidePanel = () => {
  return (
    <nav className="fixed top-0 flex flex-col justify-between py-12 pt-28 px-6 bg-secondary text-white w-sidepanel h-full">
      <div className="flex flex-col gap-6">
        <Link to={"/admin/home"}>
          <SidePanelItem icon={homeIcon}>الصفحة الرئيسية</SidePanelItem>
        </Link>
        <Link to={"/admin/products"}>
          <SidePanelItem icon={boxIcon}>المنتجات</SidePanelItem>
        </Link>
        <Link to={"/admin/categories"}>
          <SidePanelItem icon={smallShattibIcon}>التصنيفات</SidePanelItem>
        </Link>
        <Link to={"/admin/orders"}>
          <SidePanelItem icon={docIcon}>الطلبات</SidePanelItem>
        </Link>
        <Link to={"/admin/criterias"}>
          <SidePanelItem icon={twoPapersIcon}>الكراسات</SidePanelItem>
        </Link>
        <Link to={"/admin/consultations"}>استشارات</Link>
      </div>
      <div>
        <SidePanelItem icon={redLogoutIcon}>تسجيل الخروج</SidePanelItem>
      </div>
    </nav>
  );
};

export default AdminSidePanel;
