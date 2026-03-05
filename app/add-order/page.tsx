import { Page } from "@/components/pageLayout";
import  CreateOrderDrawer from '@/components/bidders/addOrder';

export default async function LoginPage() {
  return (
    <Page>
      <div className="flex  w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <CreateOrderDrawer />
        </div>
      </div>
      {/* <Page.Footer>
        <p className="text-sm text-muted-foreground text-center">
          &copy; 2025 . All rights reserved.
        </p>
      </Page.Footer> */}
    </Page>
  );
}
