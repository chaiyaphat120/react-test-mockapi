import axios from "axios"
import { render, waitFor } from "@testing-library/react"
import Test from "./TestApi"
jest.mock("axios")
const mockedAxios = axios
describe("Test", () => {
    it("Test2Mock", async () => {
        mockedAxios.get.mockResolvedValue({
            data: {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false,
            },
        })
        const component = render(<Test />)
        await waitFor(() => {
            expect(component.getByText("1")).toBeVisible()
        })
    })
})
