import { OptimizationDetail } from "@/components/optimization-detail";
import { ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Shopify Speed Optimization | SEO Speeder",
  description: "Supercharge your Shopify store. Improve load times, reduce bounce rates, and increase conversions with professional optimization.",
};

export default function ShopifyPage() {
  return (
    <OptimizationDetail
      platform="Shopify"
      title="Shopify Speed that Converts."
      description="Boost your Shopify store speed and pass Core Web Vitals. We optimize your theme, apps, and assets for maximum sales impact."
      iconName="shopping-bag"
    />
  );
}
