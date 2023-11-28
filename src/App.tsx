import {App, Link, Navbar, Page, Toolbar, View} from "framework7-react";

export default function () {
  return <App theme="auto" name="My App">

    {/* Your main view, should have "main" prop */}
    <View main>
      {/*  Initial Page */}
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
    </View>
  </App>
}