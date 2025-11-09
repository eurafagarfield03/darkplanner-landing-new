import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import dashboardImage from "@/assets/dashboard-main.png";

export const DashboardShowcase = () => {
  return (
    <div className="flex flex-col overflow-hidden -mt-[200px] md:-mt-[300px] relative z-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1a1f2e] to-transparent z-10" />
      <ContainerScroll
        titleComponent={<></>}
      >
        <img
          src={dashboardImage}
          alt="Dark Planner Dashboard"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
