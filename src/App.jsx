import {useEffect} from "react";
import {tools,categories} from "./data/tools";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToolCard from "./components/ToolCard";
import ToolLayout from "./components/ToolLayout";
import TextTool from "./components/TextTool";
import DeveloperTool from "./components/DeveloperTool";
import ImageTool from "./components/ImageTool";
import "./styles.css";

const parts=location.pathname.replace(/^\/|\/$/g,"").split("/").filter(Boolean);
const tool=parts.length===2?tools.find(t=>t.category===parts[0]&&t.slug===parts[1]):null;
const category=parts.length===1?categories[parts[0]]:null;

function ToolOnly({tool}){
  return tool.category==="text"?<TextTool tool={tool}/>:tool.category==="developer"?<DeveloperTool tool={tool}/>:<ImageTool tool={tool}/>;
}

function App(){
  const seoShell=document.body.dataset.seoShell==="true";
  useEffect(()=>{
    if(tool) document.title=tool.title;
    else if(category) document.title=category.title;
  },[]);

  if(seoShell){
    return tool?<ToolOnly tool={tool}/>:null;
  }

  let content;
  if(tool){
    const related=tools.filter(t=>t.category===tool.category&&t.slug!==tool.slug).slice(0,8);
    content=<ToolLayout tool={tool} related={related}><ToolOnly tool={tool}/></ToolLayout>;
  }else if(category){
    content=<><div className="breadcrumbs"><a href="/">Home</a> / {category.name}</div><section className="hero"><h1>{category.title}</h1><p>{category.description}</p></section><div className="grid">{tools.filter(t=>t.category===parts[0]).map(t=><ToolCard key={t.slug} tool={t}/>)}</div></>
  }else{
    content=<><section className="hero"><h1>Free online tools</h1><p>Simple browser-based utilities for text, developer tasks and images.</p></section>{Object.entries(categories).map(([key,c])=><section key={key}><h2>{c.name}</h2><div className="grid">{tools.filter(t=>t.category===key).map(t=><ToolCard key={t.slug} tool={t}/>)}</div></section>)}</>;
  }
  return <main className="container"><Header/>{content}<Footer/></main>
}
export default App;
