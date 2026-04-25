import { redirect } from "next/navigation"

const defaultCatagoryID = "01"

export default async function Home() {
  redirect(`/catagory/${defaultCatagoryID}`)
}
