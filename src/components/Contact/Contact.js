import React from "react";
import styled from "styled-components";

import data from "../../data";
import Icon from "../Icon";
import Section from "../Section";

const ContactComponent = styled.div`
  font-family: "Open Sans Condensed";
  font-weight: 300;
  font-size: 16px;
`;

const Field = styled.span`
  display: block;
  font-family: "Open Sans Condensed";
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 4px;
`;

const InlineField = styled(Field)`
  display: inline-block;
`;

const LangsSection = styled(Section)`
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export default function Contact() {
  const { location, phone, email, ...props } = data.contact;

  return (
    <ContactComponent className="contact" {...props}>
      <LangsSection>
        <Section.Title>CONTACT</Section.Title>
        {location && (
          <Field style={{ marginRight: "8px" }}>
            <Icon name="location" height="24" /> {location.toUpperCase()}
          </Field>
        )}
        {phone && (
          <InlineField style={{ marginRight: "4px" }}>
            <Icon name="telephone" height="24" /> {phone}
          </InlineField>
        )}
        {email && (
          <InlineField style={{ marginRight: "8px" }}>
            <Icon name="email" height="24" /> {email.toUpperCase()}
          </InlineField>
        )}
      </LangsSection>
    </ContactComponent>
  );
}
