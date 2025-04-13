import { Education } from "@/features/educations/types";
import { Experience } from "@/features/experiences/types";
import { Project } from "@/features/projects/types";
import { createContext, useContext, useMemo } from "react";

type DataContextType = {
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
};

const DataContext = createContext<DataContextType | null>(null);

export default function DataProvider({
  data,
  children,
}: {
  data: DataContextType;
  children: React.ReactNode;
}) {
  const contextValue = useMemo(
    () => ({
      projects: data.projects,
      experiences: data.experiences,
      educations: data.educations,
    }),
    [data.projects, data.experiences, data.educations]
  );

  return (
    <DataContext.Provider value={contextValue as DataContextType}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
