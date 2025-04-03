import { describe, it, expect } from "vitest";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});


import { render, screen } from  '@testing-library/react' 
import  App  from  './App' 

describe ( 'App' , () => { 
  it ( 'esegue il rendering del componente App' , () => { 
    render (<App />) 

    screen. debug ();
   }) 
})
