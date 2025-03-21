"use client";

import { ReactNode, useState } from "react";
import { Layout, ConfigProvider, Spin } from "antd";
import CustomHeader from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const { Content } = Layout;

interface LayoutProps {
  children: ReactNode;
}

const user = {
  username: "hoangviet",
  fullName: "Hoàng Việt",
  avatar: null,
  role: "Quản trị viên",
};

const RootPage = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex">
      <ConfigProvider componentSize="large">
        <Layout className="!h-screen">
          <Sidebar setLoading={setLoading} />
          <Layout>
            <CustomHeader user={user} />
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: "#ffffff",
                borderRadius: 8,
                position: "relative",
                overflowY: "auto",
              }}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-50">
                  <Spin size="large" />
                </div>
              )}
              {children}
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

export default RootPage;
