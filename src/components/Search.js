import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;
const Form = styled.form``;
const Input = styled.input`
  line-height: 2em;
  padding-left: 5px;
  width: calc(100% - 10px);
`;
const Label = styled.label``;
const Button = styled.button``;

export default function Search({
  searchTerm,
  handleClear,
  setSearchTerm,
  handleSearchSubmit,
}) {
  return (
    <Bar>
      <Form onSubmit={handleSearchSubmit} onReset={handleClear}>
        <Label>
          Enter search term here:&nbsp;
          <Input
            name="search"
            placeholder="ex: warren zevon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Label>
        <Actions>
          <Button type="submit">Search</Button>
          <Button type="reset">Clear</Button>
        </Actions>
      </Form>
    </Bar>
  );
}
