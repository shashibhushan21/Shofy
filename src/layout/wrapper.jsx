import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
// internal
import BackToTopCom from "@/components/common/back-to-top";
import ProductModal from "@/components/common/product-modal";
import {
  get_cart_products,
  initialOrderQuantity,
} from "@/redux/features/cartSlice";
import { get_wishlist_products } from "@/redux/features/wishlist-slice";
import { get_compare_products } from "@/redux/features/compareSlice";
import useAuthCheck from "@/hooks/use-auth-check";
import Loader from "@/components/loader/loader";

const Wrapper = ({ children }) => {
  const { productItem } = useSelector((state) => state.productModal);
  const dispatch = useDispatch();
  const authChecked = useAuthCheck();
  const router = useRouter();

  // Check for admin preview mode (optional bypass for development)
  const [isAdminPreview, setIsAdminPreview] = React.useState(false);

  React.useEffect(() => {
    // Check if admin preview mode is enabled via URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const previewMode = urlParams.get('preview') === 'admin2024';
    setIsAdminPreview(previewMode);
    
    // Store in sessionStorage to persist during navigation
    if (previewMode) {
      sessionStorage.setItem('adminPreview', 'true');
    }
    
    // Check sessionStorage
    const storedPreview = sessionStorage.getItem('adminPreview') === 'true';
    setIsAdminPreview(storedPreview || previewMode);
  }, []);

  // Redirect all routes except home and coming-soon to coming-soon page (unless admin preview)
  useEffect(() => {
    const allowedRoutes = ['/', '/home', '/coming-soon'];
    const isAllowedRoute =
      allowedRoutes.some((r) => router.pathname === r || router.pathname.startsWith(r));
    if (!isAdminPreview && !isAllowedRoute) {
      router.push('/coming-soon');
    }
  }, [router.pathname, isAdminPreview, router]);

  useEffect(() => {
    dispatch(get_cart_products());
    dispatch(get_wishlist_products());
    dispatch(get_compare_products());
    dispatch(initialOrderQuantity());
  }, [dispatch]);

  return !authChecked ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Loader spinner="fade" loading={!authChecked} />
    </div>
  ) : (
    <div id="wrapper">
      {children}
      <BackToTopCom />
      <ToastContainer />
      {/* product modal start */}
      {productItem && <ProductModal />}
      {/* product modal end */}
    </div>
  );
};

export default Wrapper;
