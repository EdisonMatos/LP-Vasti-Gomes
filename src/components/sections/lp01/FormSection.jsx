import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../..//content/content";
import SectionHeader from "../../sectionElements/SectionHeader";
import WhatsappForm from "../../interactives/WhatsappForm";
import contentLp01 from "../../../content/contentLp01";

export default function FormSection() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea>
      {/* <SectionShapeDiv shapeDivArrow shapeColor="text-white"/> */}
      <SectionWrapper className="">
        <MotionDivDownToUp className="flex-col w-full desktop1:w-[50%] flex justify-center items-center ">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            miniTitle={contentLp01.form.miniTag}
            sectionHeaderTitle={contentLp01.form.title}
            sectionHeaderSubtitle={contentLp01.form.subtitle}
            color="dark"
            type=""
            titleColorSet="text-secondary"
          />
          <WhatsappForm />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}