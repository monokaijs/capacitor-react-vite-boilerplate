import {Link, Navbar, Page, Toolbar} from "framework7-react";

export default function Home() {
  return <>
    <Page>
      {/* Top Navbar */}
      <Navbar title="Awesome App"></Navbar>
      {/* Toolbar */}
      <Toolbar bottom>
        <Link>Link 1</Link>
        <Link>Link 2</Link>
      </Toolbar>
      {/* Page Content */}
      <p>Page content goes here</p>
      <Link href="/about/">About App</Link>
    </Page>
  </>
}