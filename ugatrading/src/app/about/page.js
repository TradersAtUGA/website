import Image from "next/image";
import MemberList from "@/components/member/MemberList";
import "@/styles/animations.css";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] fade-in-up w-full flex flex-col gap-8 items-center pt-20 max-w-4xl mx-auto p-4">
      <Image
        src="/group.jpeg"
        alt="About"
        width={800}
        height={800}
        className="rounded-lg w-[900px] h-[400px] object-cover"
      />
      <h1 className="text-4xl font-bold">About</h1>
      <p className="text-lg text-center sm:text-left">
        Traders@UGA is the University of Georgia’s premier Quantitative Finance
        Club, dedicated to fostering innovation, education, and collaboration in
        trading, quantitative research, and market analysis. Our mission is to
        bridge the gap between academia and the financial industry, empowering
        students to transform their theoretical knowledge into practical
        applications.
      </p>

      <p className="text-lg text-center sm:text-left">
        At Traders@UGA, we emphasize cutting-edge research and hands-on learning
        to explore the complexities of financial systems. From algorithmic
        trading to financial modeling and data-driven market strategies, our
        club provides opportunities to develop technical skills, tackle
        real-world challenges, and connect with professionals in the field.
      </p>
      <p className="text-lg text-center sm:text-left">
        Whether you’re a seasoned finance enthusiast or just beginning your
        journey, Traders@UGA is the place to grow your expertise, engage with
        like-minded peers, and shape the future of finance. Join us and become
        part of a community where education meets innovation and ambition drives
        success.
      </p>

      <h2 className="text-4xl font-bold mt-20">Meet the Team</h2>
      <MemberList />
    </div>
  );
}
