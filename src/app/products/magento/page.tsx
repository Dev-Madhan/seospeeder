import { OptimizationDetail } from "@/components/optimization-detail";
import { ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Magento Speed Optimization | SEO Speeder",
  description: "Expert Magento performance tuning. Scale your enterprise e-commerce site with architect-level speed optimization.",
};

export default function MagentoPage() {
  return (
    <OptimizationDetail
      platform="Magento"
      title="Enterprise Magento Performance."
      description="E-commerce performance optimization for Magento 2. We handle database tuning, Luma/Hyvä theme optimization, and server-side scaling."
      iconName="shopping-bag"
    />
  );
}
