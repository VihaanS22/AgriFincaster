import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Sprout } from "lucide-react";
import { auth, db } from "../firebase";

export default function Register(){
  const navigate=useNavigate(); const [username,setUsername]=useState(""); const [password,setPassword]=useState(""); const [busy,setBusy]=useState(false); const [error,setError]=useState("");
  useEffect(()=>auth.onAuthStateChanged(user=>{if(user) navigate("/");}),[navigate]);
  const submit=async(e)=>{e.preventDefault();setError("");const name=username.trim();if(!name||password.length<6){setError("Use a username and a password of at least 6 characters.");return;}setBusy(true);try{const q=query(collection(db,"users"),where("username","==",name));const snap=await getDocs(q);if(!snap.empty)throw new Error("That username already exists.");const email=`${name.replace(/\s+/g,"_")}@agfc.in`;const cred=await createUserWithEmailAndPassword(auth,email,password);await setDoc(doc(db,"users",cred.user.uid),{username:name,createdAt:new Date().toISOString(),reports:[]},{merge:true});navigate("/");}catch(err){setError(err.message||"Registration failed.");}finally{setBusy(false);}};
  return <div className="auth-page"><div className="auth-visual"><span className="eyebrow">AGRI FINCASTER</span><h1>Better inputs.<br/><em>Better farm decisions.</em></h1><p>Create your account and keep your crop reports in one place.</p></div><form className="auth-card" onSubmit={submit}><div className="auth-brand"><span className="brand-mark"><Sprout size={20}/></span><div><strong>AGRI</strong><small>FINCASTER</small></div></div><h2>Create account</h2><p>Set up your farmer dashboard.</p><label>Username<input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Choose username"/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Minimum 6 characters"/></label>{error&&<div className="form-error">{error}</div>}<button className="primary-btn" disabled={busy}>{busy?"Creating…":"Create account"}</button><div className="auth-row"><span>Already registered?</span><Link to="/login">Sign in</Link></div></form></div>;
}
