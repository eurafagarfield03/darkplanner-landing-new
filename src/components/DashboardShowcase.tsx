import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import dashboardImage from "@/assets/dashboard-main.png";

export const DashboardShowcase = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-foreground">
              Visualize e Gerencie <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-primary via-blue-500 to-primary/60 bg-clip-text text-transparent">
                Tudo em um Só Lugar
              </span>
            </h2>
          </>
        }
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
