import React from "react"

export enum SelectedPage {
    Home = "главная",
    Reviews = "отзывы",
    Services = "услуги",
    ContactUs = "связаться",
  }

  export interface BenefitType {
    icon: JSX.Element;
  title: string;
  description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }