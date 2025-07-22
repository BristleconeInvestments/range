"use client"

import { AppSidebar } from "~/app/_components/app-sidebar"
import { DashboardHeader } from "~/app/_components/dashboard-header"
import { DashboardStats } from "~/app/_components/dashboard-stats"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground">Welcome back!</p>
            </div>
            <DashboardStats />
            <div className="grid gap-4 md:gap-8 lg:grid-cols-7">
              <div className="col-span-4">
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Chart placeholder - integrate with your preferred charting library
                  </p>
                </div>
              </div>
              <div className="col-span-3">
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Recent activity placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
