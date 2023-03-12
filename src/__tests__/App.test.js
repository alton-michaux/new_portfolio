// import dependencies
import React from 'react'
// import react-testing methods
import { render, MemoryRouter, fireEvent, waitFor, screen } from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// the component to test
import { Home } from "../components/routes/Home"
import { About } from "../components/routes/About"
import { Contact } from "../components/routes/Contact"
import { Experience } from "../components/routes/Experience"
import { PageUnknown } from "../components/routes/PageUnknown"


jest.mock("../components/routes/Home")
jest.mock("../components/routes/About")
jest.mock("../components/routes/Contact")
jest.mock("../components/routes/Experience")
jest.mock("../components/routes/PageUnknown")

import { App } from '../App'

test("Should render page header and HomePage on default route", () => {
    // Arrange
    Home.mockImplementation(() => <div>HomePageMock</div>);

    // Act
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
})
