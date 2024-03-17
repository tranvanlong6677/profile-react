/* eslint-disable @typescript-eslint/no-explicit-any */
import BasicInformation from "../components/BasicInformation";
import DefaultLayout from "../layouts/DefaultLayout";
import { routesObj } from "../utils/routes";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Education from "../components/Education";
import Skills from "../components/Skills";


export const userRoutes: any = [
  {
    path: routesObj.basicInformation,
    component: BasicInformation,
    layout: DefaultLayout,
  },
  {
    path: routesObj.experience,
    component: Experience,
    layout: DefaultLayout,
  },
  {
    path: routesObj.project,
    component: Project,
    layout: DefaultLayout,
  },
  {
    path: routesObj.education,
    component: Education,
    layout: DefaultLayout,
  },
  {
    path: routesObj.skills,
    component: Skills,
    layout: DefaultLayout,
  },


];

