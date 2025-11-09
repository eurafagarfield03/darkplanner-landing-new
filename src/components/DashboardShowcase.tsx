import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import dashboardImage from "@/assets/dashboard-main.png";

export const DashboardShowcase = () => {
  return (
    <div className="flex flex-col overflow-hidden -mt-32 md:-mt-40">
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
