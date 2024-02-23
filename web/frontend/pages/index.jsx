import {
  Page, VerticalStack, 
} from "@shopify/polaris";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";



export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page fullWidth>
      <VerticalStack>
        <Sidebar />
      </VerticalStack>
    </Page>
  );
}
