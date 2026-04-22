import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approve your child's account · Screen Time Hero",
  description:
    "Give verifiable parental consent so your child can use Screen Time Hero, as required by COPPA.",
  robots: { index: false, follow: false },
};

export default function ConsentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
