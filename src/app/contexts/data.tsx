import { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Profile = {
  firstname: string;
  lastname: string;
  profession: string;
  profilePhoto: string;
  memoji: string;
  address: string;
  mail: string;
  phoneNumber: string;
};

type Skill = {
  id: number;
  key: number;
  name: string;
  svg: string;
  level: number;
};

export type Interest = {
  id: number;
  name: string;
}

type SoftSkills = {
  id: number;
  name: string;
};

export type Experiences = {
  id: number;
  name: string;
  organism:string;
  date: string;
  location: string;
  skills: Array<{id:number, text:string}>
};

type Description = string;

export type Education = {
  id: number;
  name: string;
  location: string;
  date: string;
  organism: string;
};

type Languages = {
  id: number;
  name: string;
  level: number;
}

type Data = {
  profile: Profile;
  skills: Skill[];
  interests: Interest[];
  softskills: SoftSkills[];
  description: Description;
  experiences: Experiences[];
  education: Education[];
  languages: Languages[];
  error: Error | null;
};

const initialData: Data = {
  profile: {
    firstname: "",
    lastname: "",
    profession: "",
    profilePhoto: "",
    memoji:"",
    address: "",
    mail: "",
    phoneNumber: ""
  },
  skills: [],
  interests: [],
  softskills: [],
  description: "",
  experiences: [],
  education: [],
  languages: [],
  error: null
};

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData: Data = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataContext.Provider value={data || initialData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

