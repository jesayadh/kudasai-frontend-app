import { Component } from "react";
import Header from "../components/Nav/header";
import Footer from "../components/Nav/footer";
import Interaction from "@/components/Interaction/interaction";
import { useAuth } from "@/hooks/auth";
import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";

export default class Interactions extends Component {
  componentDidMount() {
    var script_src = [
      "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/split.js/1.5.10/split.min.js",
      // "assets/js/js.js",
      // "assets/js/chat.js",
      // "assets/js/resize.js",
    ];
    script_src.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }
  render() {
    return (
      <>
        <AppLayout>
            <Head>
                <title>Kudasai - Interactions</title>
            </Head>
        <Interaction/>
        </AppLayout>
      </>
    );
  }
}
