import { type } from "os";
import React, { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

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

type SoftSkills = {
  id: number;
  name: string;
};

type Experiences = {
  id: number;
  name: string;
  enterprise:string;
  date: string;
  skills: Array<{id:number, text:string}>
};

type Description = string;

type Testimonial = {
  id: number;
  author: string;
  job: string;
  photoAuthor: string;
  testimonial: string;
  website: string;
  linkedin: string;
};

type Languages = {
  id: number;
  name: string;
  level: number;
}

type Data = {
  profile: Profile;
  skills: Skill[];
  softskills: SoftSkills[];
  description: Description;
  experiences: Experiences[];
  testimonials: Testimonial[];
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
  softskills: [],
  description: "",
  experiences: [],
  testimonials: [],
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

