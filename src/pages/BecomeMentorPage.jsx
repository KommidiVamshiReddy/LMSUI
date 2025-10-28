import React from "react";
import MentorHero from "../components/Mentor/MentorHero";
import MentorBenefits from "../components/Mentor/MentorBenefits";
import MentorProcess from "../components/Mentor/MentorProcess";
import MentorForm from "../components/Mentor/MentorForm";

export default function BecomeMentorPage() {
  return (
    <div>
      <MentorHero />
      <MentorBenefits />
      <MentorProcess />
      <MentorForm />
    </div>
  );
}
