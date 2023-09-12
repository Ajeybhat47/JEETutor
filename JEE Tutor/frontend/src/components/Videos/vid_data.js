import React, { Component, useState, useEffect} from "react";



import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

// import "./vid_data"

import Videocard from './VideoCard'


import ReactPlayer from 'react-player'

// import "./video.css"

    import "slick-carousel/slick/slick.css"; 
    import "slick-carousel/slick/slick-theme.css";

  import "./video.css"


  
let maths={
  "kind": "youtube#playlistItemListResponse",
  "etag": "uFrln2peYimRDfQxZPl-h2RUK40",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "2PBB8RrykfDzoXX0Rbz7sJNNAcU",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS41NkI0NEY2RDEwNTU3Q0M2",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Sequence and Series | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu JEE",
        "description": "Sequence and Series Class 11 | One Shot | JEE Main 2023 | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu\n\nClick here to play the quiz https://vdnt.in/xj3Kx\n\nJEE Main 2023 (IIT JEE 2023). Worried about Sequence and Series for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Sequence and Series JEE Mains) (Sequence and Series IIT JEE) session for JEE 2021 at Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Sequence and Series JEE Mains (Sequence and Series in Hindi)  by Arvind Kalia Sir. Learn more about Sequence and Series One Shot in LIVE & Solve your doubts only at Vedantu JEE.\n\n✅ Assignment for \"ONE SHOT - Sequence and Series\" ➡️ https://bit.ly/38G1Z7F\n\n✅Solutions For \" ONE SHOT - Sequence and Series\" ➡️ https://bit.ly/3l1OWQy\n\n✅ Session PDF for \"ONE SHOT - Sequence and Series\" ➡️ https://bit.ly/2JYxbog \n\n🪔 🪔🧨🎆 Special Diwali OFFER Hurry! Use Coupon Code - AVKPRO and get in 50% Off Upto Rs.10,000 for Vedantu Pro Subscription (Offer Valid 7th -15th Nov 2020 ) ✅ https://www.vedantu.com/course/pro?flow=marketing&utm_source=youtube&utm_medium=classpitch&utm_campaign=2G3nVmvta7o\n👇👇👇👇\nBenefits of buying a PRO Subscription:\n✨  Unlimited LIVE class with your favourite teachers\n✨  Unlimited Doubt Solving in Live class\n✨  Fun interactive learning with in-class quiz and leaderboard \n✨  Get full access to Structured long term course, Chapter wise micro-course and Revision course before the exam\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zu45r\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zu45t\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zu45y\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zu45D\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zu45L\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zu45V\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n---\n#SequenceandSeries #JEEMaths #RefocusReviseReward #SequenceandSeriesJEEMains\n#SequenceandSeriesIITJEE #jeemain2023  #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ NCERT 11th and 12th: https://vdnt.in/vncert \n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Sequence and Series JEE Mains (Sequence and Series IIT JEE) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Sequence and Series IIT JEE Maths (Sequence and Series One Shot) (Sequence and series in Hindi) / Sequence and series Vedantu JEE.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2G3nVmvta7o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2G3nVmvta7o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2G3nVmvta7o/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/2G3nVmvta7o/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/2G3nVmvta7o/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "2G3nVmvta7o"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "2G3nVmvta7o",
        "videoPublishedAt": "2020-11-13T12:42:34Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "ItAxB0h0buLnFi1uzp_WGgrYiH0",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS4yODlGNEE0NkRGMEEzMEQy",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Trigonometry | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3sF\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Trigonometry for JEE Mains 2023? (Trigonometry IIT JEE) (JEE Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Trigonometry JEE Mains 2023 a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Trigonometry One Shot JEE by Arvind Kalia Sir. Learn more about Trigonometry in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/ztJGF\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/ztJGW\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/ztJHf\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/ztJHt\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/ztJHJ\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/ztJHZ\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 (Online Coaching for IIT JEE | Online Classes for JEE | Online Course for IIT JEE (JEE Crash Course))\nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#Trigonometry #JEEMaths #RefocusReviseReward #jee2023#jeemain2023  #VedantuJEE #JEECrashCourse #OnlineCoachingforIITJEE #OnlineClassesforJEE #OnlineCourseforIITJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop   \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ Vedantu JEE Enthuse English: https://vdnt.in/enthuse\n➡️ Vedantu NEET Elite English: https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Trigonometry - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Trigonometry IIT JEE Maths (Trigonometry Vedantu JEE) (Trigonometry One Shot JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QqUtE_U3SKI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QqUtE_U3SKI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QqUtE_U3SKI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/QqUtE_U3SKI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/QqUtE_U3SKI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "QqUtE_U3SKI"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "QqUtE_U3SKI",
        "videoPublishedAt": "2021-01-04T09:46:26Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "YrJwK6TlPpbl2Sw2DXqIDpTD0lk",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS4wMTcyMDhGQUE4NTIzM0Y5",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Complex Numbers | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3Bh\n\nJEE Main 2023 (IIT JEE 2021). Worried about Complex Numbers for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Complex Numbers JEE Mains (Complex Numbers Class 11 IIT JEE)(Complex Numbers Class 12 IIT JEE) session for JEE 2023 at Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Complex numbers JEE Mains (Complex Number for IIT JEE) (Complex numbers Vedantu) by Arvind Kalia Sir. Learn more about Complex Numbers One Shot in LIVE & Solve your doubts only at Vedantu JEE. \n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/ztS6F\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/ztS74\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/ztS7q\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/ztS7P\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/ztS8n\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/ztS8G\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nThe most sought-after exam – IIT JEE 2023 is considered as a hard nut to crack by almost all the JEE aspirants appearing for it. Let's master on Complex Numbers IIT JEE (Complex Numbers JEE Mains) (Complex Numbers Class 11) (Complex Numbers Class 12 IIT JEE) that will help you to solve Complex Numbers JEE Mains questions easier by Arvind Kalia Sir.\n\nLet's learn JEE Main Maths (IIT JEE Maths) and crack JEE Main 2023 at ease. Here we will cover all the lectures based on Complex Numbers IIT JEE (Complex Numbers for IIT JEE)(Complex Numbers JEE Mains) (jee complex numbers).\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n-------\n#ComplexNumbers #JEEMaths #RefocusReviseReward #ComplexNumbersJEE #ComplexNumbersIITJEE #jeemain2023  #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Spectrum by Vedantu: https://vdnt.in/VSpectrum\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Complex numbers JEE Mains (Complex numbers  IIT JEE) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Complex numbers IIT JEE maths (Complex numbers one shot) (Complex numbers revision) (JEE Complex numbers) / Complex numbers Class 12 IIT JEE.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GpTGncqVjxE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GpTGncqVjxE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GpTGncqVjxE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/GpTGncqVjxE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/GpTGncqVjxE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "GpTGncqVjxE"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "GpTGncqVjxE",
        "videoPublishedAt": "2020-11-10T12:26:45Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "dLWYPjEJqJVmclzPJyuVZp1FDWY",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS41MjE1MkI0OTQ2QzJGNzNG",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Limits | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj2RW\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about limits for JEE Mains 2023? (Limits for IIT JEE) (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Limits JEE Mains a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Limits IIT JEE (Limits One Shot) (Limits maths) (Limits Vedantu JEE) by Arvind Kalia Sir. Learn more about Limits Class 12 IIT JEE in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zrBda\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zrBdn\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zrBdH\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zrBdY\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zrBeh\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zrBeG\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\n\n📢 Take the Vedantu Master Scholarship Admission Test ➡️ Register Now for Free-  https://vdnt.in/YTVMST (Get upto 100% Scholarship for JEE, NEET & CBSE Exam Preparation from Rs.100 Cr. Pool 🤑)\n\n📢 Join our telegram group: https://vdnt.in/JEEVedantu 🔔\n\n➡️ Download Vedantu Free Learning App here: https://vedantu.app.link/qKQGWkY900\n\n🚀 **IMPORTANT PLAYLISTS & SESSIONS:**\n\n👉 Limits - Playlist  | Class 12 | JEE Main 2021 | JEEt Lo 2021 | JEE Maths: https://www.youtube.com/playlist?list=PLCtUyOrCJbxxdmVHcHQeNm4DDSt15dzbM\n\n👉 JEE Maths (One Shot) - Playlist | Refocus-Revise-Reward 🏆 | Arvind Kalia Sir | JEE Main 2021 (JEE 2021): https://www.youtube.com/playlist?list=PLCtUyOrCJbxy3-0Ecpw_1ncE9eUNtFSpY\n\n👉 Refocus-Revise-Reward 🏆 | JEE Main 2021 (JEE 2021) | JEE Droppers: https://www.youtube.com/playlist?list=PLCtUyOrCJbxy0Kx1meHKCWmK4SrW3bmQ7\n\n👉 JEE Maths (Decoded 🧐) - Playlist | Class 11 & 12 | JEE Main 2021/ 2022 Preparation | Arvind Kalia Sir: https://www.youtube.com/playlist?list=PLCtUyOrCJbxxnoX5N0j6pcfs5rVMCsTtL\n\n👉 [Arvind Kalia Sir] JEE 2021 Preparation Tips, Strategy & Motivation - Playlist: https://www.youtube.com/playlist?list=PLCtUyOrCJbxzUjRsyG4rbZK5LrhsTIW7B\n\n👉 JEEt Lo 2021 | JEE Main 2021 (PCM): https://www.youtube.com/playlist?list=PLCtUyOrCJbxznDraRnsBl6khl9akAjpn8\n\n👉 JEE Maths - Playlist | JEE Main 2021 (JEEt Lo 2021 for Class 12) | Arvind Sir: https://www.youtube.com/playlist?list=PLCtUyOrCJbxz7-HEkkV3jYOcsMeKcK1HA\n\n👉 JEE Maths Chapterwise Playlists (JEEt Lo 2021 & 2022): https://www.youtube.com/c/Vedantu/playlists?view=50&sort=dd&shelf_id=6\n\n👉 Decoded 🧐 - Playlist | Class 12 | JEE Main 2021 | JEE 2021 (Preparation): https://www.youtube.com/playlist?list=PLCtUyOrCJbxx88-cvwxEeAieVXWVMbSuh\n\nLimits is an extremely important topic of calculus. It is also important because it lays the groundwork for various other topics like continuity and differentiability. The concept of limits has also resulted in various other branches of calculus.\n\nThe most sought-after exam – IIT JEE 2021 is considered a hard nut to crack by almost all the JEE aspirants appearing for it. Let's master Limits that will help you to solve Limits JEE Mains questions easier by Arvind Kalia Sir.\n\nHere’s a quick rundown of what you’re about to learn ⬇️\n✦ Limits IIT JEE (Limits JEE Mains)\n✦ Limits for JEE (Limits JEE Mains 2021)\n✦ Limits One Shot (Limits Maths)\n✦ Limits Class 12 JEE (Limits Class 12 IIT JEE)\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#Limits #JEEMaths #RefocusReviseReward #LimitsIITJEE #LimitsJEEMains #LimitsClass12 #VedantuJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Limits - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Limits IIT JEE Maths (Limits for JEE Mains) (Limits for IIT JEE) (Limits Class 12 IIT JEE) (Limits Vedantu JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fYWIUIwvsQk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fYWIUIwvsQk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fYWIUIwvsQk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/fYWIUIwvsQk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/fYWIUIwvsQk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "fYWIUIwvsQk"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "fYWIUIwvsQk",
        "videoPublishedAt": "2020-11-28T10:30:12Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "3dPsJlTgHBkDq08dMQ1x2TLL6i8",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS4wOTA3OTZBNzVEMTUzOTMy",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Straight Lines | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Straight Lines| One Shot | JEE Main 2023 | Refocus-Revise-Reward 🏆 | Arvind Kalia Sir | Vedantu JEE\n\nClick here to play the quiz https://vdnt.in/xj3gm\n\nJEE Main 2023 (IIT JEE 2023). Worried about Straight Lines for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Straight lines IIT JEE (Straight lines Class 11 IIT JEE) session for JEE 2023 at Refocus-Revise-Reward series. Let's crack JEE Main 2021 (JEE Droppers) by knowing the Straight lines JEE Mains (Straight lines Class 11 IIT JEE) (Straight lines vedantu) by Arvind Kalia Sir. Learn more about Straight lines one shot in LIVE & Solve your doubts only at Vedantu JEE. Let's learn JEE Main Maths (IIT JEE Maths) and crack JEE Main 2023 at ease. Here we will cover all the lectures based on Straight lines IIT JEE.\n\n🔥🔥 Hello Students, the KBC HOT SEAT is waiting for you. Play VQuiz and stand a chance to get shortlisted to play Fastest Finger First on KBC. Hurry Up and grab your chance! Download Vedantu Learning App Now! ➡️ https://vedantu.app.link/qKQGWkY900\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/ztCvm\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/ztCtt\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/ztCtS\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/ztCua\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/ztCuv\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/ztCuR\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n------------------------------------\n#StraightLines #JEEMaths #RefocusReviseReward #jeemain2023  #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Spectrum by Vedantu: https://vdnt.in/VSpectrum\n➡️ Momentum with Vedantu:  https://vdnt.in/Momentum \n➡️ NCERT 11th and 12th: https://vdnt.in/vncert \n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Straight lines JEE Mains (Straight lines IIT JEE) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Straight lines IIT JEE maths (Straight lines one shot) (Straight lines revision)(Straight lines Maths) / Straight lines Class 11 IIT JEE.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/AZLD5L5vVlo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/AZLD5L5vVlo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/AZLD5L5vVlo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/AZLD5L5vVlo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/AZLD5L5vVlo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "AZLD5L5vVlo"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "AZLD5L5vVlo",
        "videoPublishedAt": "2020-10-23T12:01:57Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "azVE65ReWYFzxKuE3dKaVGSX8qk",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS4xMkVGQjNCMUM1N0RFNEUx",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Circles | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3wp\n\nJEE Main 2023 (IIT JEE 2021). Worried about circles for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Circles JEE Mains (Circles Class 11 IIT JEE)(Circles Class 12) session for JEE 2023 at Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Circles JEE Mains (Circles Class 11 IIT JEE) (Circles Vedantu) by Arvind Kalia Sir. Learn more about Circles one shot in LIVE & Solve your doubts only at Vedantu JEE. Let's learn JEE Main Maths (IIT JEE Maths) and crack JEE Main 2023 at ease. Here we will cover all the lectures based on Circles IIT JEE (Circles for IIT JEE)(Circles for JEE Mains) (Circles one shot)(Circles JEE revision).\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/ztCGt\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/ztCGY\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/ztCHt\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/ztCJ1\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/ztCJu\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/ztCKi\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nA circle is a closed shape. It is a plane or you can say 2d shape. It is the set of all points which are at the same distance from a fixed point called Center.\n\nThe most sought-after exam – IIT JEE 2023 is considered as a hard nut to crack by almost all the JEE aspirants appearing for it. Let's master on Circles IIT JEE (Circles JEE Mains) (Circles Class 11 IIT JEE) (Circles Vedantu) that will help you to solve Circles JEE Mains questions easier by Arvind Kalia Sir.\n\nHere’s a quick rundown of what you’re about to learn ⬇️\n✦ Circles IIT JEE maths\n✦ Circles JEE Mains (Circles JEE)\n✦ Circles JEE Mains questions (Circles JEE questions)\n✦ Circles Class 11 IIT JEE (Circles Vedantu JEE)\n✦ Circles one shot  \n✦ Circles revision\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n------------------------------------\n#Circles #JEEMaths #RefocusReviseReward #JEEMain2021 #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #JEE2021 #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Spectrum by Vedantu: https://vdnt.in/VSpectrum\n➡️ Momentum with Vedantu:  https://vdnt.in/Momentum \n➡️ NCERT 11th and 12th: https://vdnt.in/vncert \n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Circles JEE Mains (Circles  IIT JEE) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Circles IIT JEE maths (Circles one shot) (Circles revision)(Circles Maths) / Circles Class 11 IIT JEE.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/mOV4ti-D5_U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/mOV4ti-D5_U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/mOV4ti-D5_U/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/mOV4ti-D5_U/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/mOV4ti-D5_U/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 5,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "mOV4ti-D5_U"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "mOV4ti-D5_U",
        "videoPublishedAt": "2020-10-27T11:50:03Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "obMMoTiHrroAyd3a0tcd2LUUCw4",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS41MzJCQjBCNDIyRkJDN0VD",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Binomial Theorem | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3te\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Binomial Theorem for JEE Mains 2023? (Binomial theorem IIT JEE in one shot) (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Binomial theorem JEE Mains 2023 a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Binomial theorem IIT JEE (Binomial theorem One Shot) (Binomial theorem Vedantu JEE) by Arvind Kalia Sir. Learn more about the Binomial theorem in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zsm8d\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zsm7G\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zsm6S\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zsm6a\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zsm5F\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zsm4P\n✅ Whatsapp Vedantu - English :- https://vdnt.in/zmZqs\n\n\nThe most sought-after exam – IIT JEE 2023 is considered a hard nut to crack by almost all the JEE aspirants appearing for it. Let's master binomial theorem that will help you to solve binomial theorem JEE Mains questions easier by Arvind Kalia Sir.\n\nHere’s a quick rundown of what you’re about to learn ⬇️\n✦ Binomial theorem IIT JEE in one shot\n✦ Binomial theorem JEE one shot\n✦ Binomial theorem one shot\n✦ Binomial theorem JEE Mains 2023\n✦ Binomial theorem Class 12 IIT JEE\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#BinomialTheorem #JEEMaths #RefocusReviseReward #BinomialTheoremIITJEE #BinomialTheoremJEEMains #BinomialTheoremClass12 #JEE2021#jeemain2023 #VedantuJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Binomial theorem - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Binomial theorem IIT JEE Maths (Binomial theorem for JEE Mains) (Binomial theorem for IIT JEE) (Binomial theorem Class 12 IIT JEE) (Binomial theorem Vedantu JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4aoUQw930Hk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4aoUQw930Hk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4aoUQw930Hk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/4aoUQw930Hk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/4aoUQw930Hk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 6,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "4aoUQw930Hk"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "4aoUQw930Hk",
        "videoPublishedAt": "2020-12-02T09:57:40Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "EzLLD_IHAe1H0Dwt8WQi_C74YAU",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS5DQUNERDQ2NkIzRUQxNTY1",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Permutation and Combination | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj31D\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Permutation and Combination for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Permutation and Combination JEE Mains a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Permutation and Combination IIT JEE (Permutation and Combination One Shot) (JEE Main Permutations and Combinations) by Arvind Kalia Sir. Learn more about Permutation and Combination in LIVE & Solve your doubts only at Vedantu JEE.\n\n✅ Assignment for \"ONE SHOT - Permutation and Combination\" ➡️ https://bit.ly/334Slrx\n\n✅ Solution for \"ONE SHOT - Permutation and Combination\" ➡️https://bit.ly/33cVqFU\n\n✅ Session PDF for \"ONE SHOT - Permutation and Combination\" ➡️ https://bit.ly/3nIqDZs\n\n✅ Use Code AVKPRO to get Vedantu Pro Subscription @20% Discount:  https://www.vedantu.com/course/pro?flow=marketing&utm_source=youtube&utm_medium=classpitch&utm_campaign=jrWPvece4lo\n👇👇👇👇\nBenefits of buying a PRO Subscription:\n✨  Unlimited LIVE class with your favourite teachers\n✨  Unlimited Doubt Solving in Live class\n✨  Fun interactive learning with in-class quiz and leaderboard \n✨  Get full access to Structured long term course, Chapter wise micro-course and Revision course before the exam\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zrCjE\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zrCkt\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zrCm8\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zrCnD\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zrCp9\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zrCpy\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\n\nThe most sought-after exam – IIT JEE 2023 is considered a hard nut to crack by almost all the JEE aspirants appearing for it. Let's master Permutation and Combination that will help you to solve Permutation and Combination JEE Mains questions easier by Arvind Kalia Sir.\n\nHere’s a quick rundown of what you’re about to learn ⬇️\n✦ Permutation and Combination JEE Mains\n✦ Permutation and Combination for JEE Mains\n✦ Permutation and Combination IIT JEE\n✦ JEE Main Permutations and Combinations\n✦ Permutation and Combination JEE One Shot\n✦ Permutation and Combination One Shot\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#PermutationandCombination #JEEMaths #RefocusReviseReward #jeemain2023  #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Permutation and Combination - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Permutation and Combination IIT JEE Maths (Permutation and Combination for JEE Mains) (Permutation and Combination Vedantu JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jrWPvece4lo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jrWPvece4lo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jrWPvece4lo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/jrWPvece4lo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/jrWPvece4lo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 7,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "jrWPvece4lo"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "jrWPvece4lo",
        "videoPublishedAt": "2020-11-20T12:39:10Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "z5mmIU9GvCwlRcXVpAWJLZyzdJk",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS45NDk1REZENzhEMzU5MDQz",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Statistics and Mathematical Reasoning | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir |Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3Ca\n\nJEE Main 2023 (IIT JEE 2023). Worried about Statistics and Mathematical Reasoning for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Statistics JEE Mains\n& Mathematical Reasoning JEE Mains a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Statistics IIT JEE (JEE Main Statistics) and Mathematical Reasoning IIT JEE (JEE Main Mathematics Mathematical Reasoning) by Arvind Kalia Sir. Learn more about Statistics and Mathematical Reasoning in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zu2iw\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zu2iN\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zu2iT\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zu2iV\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zu2iY\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zu2j5\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n---------------\n#Statistics #MathematicalReasoning #JEEMaths #RefocusReviseReward #StatisticsJEEMains #MathematicalReasoningJEEMains #jeemain2023  #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Statistics and Mathematical Reasoning - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Statistics IIT JEE Maths (Statistics for JEE Mains) and Mathematical Reasoning IIT JEE (JEE Main Mathematics Mathematical Reasoning).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/y3f3xxfCPJM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/y3f3xxfCPJM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/y3f3xxfCPJM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/y3f3xxfCPJM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/y3f3xxfCPJM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 8,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "y3f3xxfCPJM"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "y3f3xxfCPJM",
        "videoPublishedAt": "2020-11-17T10:30:12Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "3BS4kBYyZ7oLP4Ob_mqCpL5Xpnk",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS5GNjNDRDREMDQxOThCMDQ2",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Standard Functions | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj5bM\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Standard functions for JEE Mains 2023? (Standard functions IIT JEE) (JEE Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Standard functions JEE Mains 2023 a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Standard functions One Shot | Functions Class 12 IIT JEE by Arvind Kalia Sir. Learn more about the Standard functions in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅JEE 2023 Pro Lite - English:-  https://vdnt.in/zyC1B\n✅JEE 2023 Pro Lite - Hinglish:-  https://vdnt.in/zyC1K\n✅Aakrosh JEE Repeater 2023 - English:-  https://vdnt.in/zyC1R\n✅Aakrosh JEE Repeater 2023 - Hinglish:-  https://vdnt.in/zyC27\n✅ whatsapp vedantu - English :-   https://vdnt.in/zuBH3\n\n📢 Join our telegram group: https://vdnt.in/JEEVedantu 🔔\n\n➡️ Download Vedantu Free Learning App here: https://vedantu.app.link/qKQGWkY900\n\n🚀 **IMPORTANT PLAYLISTS & SESSIONS:**\n\n📚 JEE Maths (One Shot) - Playlist | Refocus-Revise-Reward 🏆 | Arvind Kalia Sir | JEE Main 2021 (JEE 2021): https://www.youtube.com/playlist?list=PLCtUyOrCJbxy3-0Ecpw_1ncE9eUNtFSpY\n\n📚 Refocus-Revise-Reward 🏆 | JEE Main 2021 (JEE 2021) | JEE Droppers: https://www.youtube.com/playlist?list=PLCtUyOrCJbxy0Kx1meHKCWmK4SrW3bmQ7\n\n📚 JEE Sprint 🏃\u200d♂️ - Playlist | JEE Main 2021 (JEE 2021): https://www.youtube.com/playlist?list=PLCtUyOrCJbxy89iaq2-WJDHX5RUqSnKf8\n\n📚 JEE Maths (Decoded 🧐) - Playlist | Class 11 & 12 | JEE Main 2021/ 2022 Preparation | Arvind Kalia Sir: https://www.youtube.com/playlist?list=PLCtUyOrCJbxxnoX5N0j6pcfs5rVMCsTtL\n\n📚 [Arvind Kalia Sir] JEE 2021 Preparation Tips, Strategy & Motivation - Playlist: https://www.youtube.com/playlist?list=PLCtUyOrCJbxzUjRsyG4rbZK5LrhsTIW7B\n\n📚 JEEt Lo 2021 | JEE Main 2021 (PCM): https://www.youtube.com/playlist?list=PLCtUyOrCJbxznDraRnsBl6khl9akAjpn8\n\n📚 JEE Maths - Playlist | JEE Main 2021 (JEEt Lo 2021 for Class 12) | Arvind Sir: https://www.youtube.com/playlist?list=PLCtUyOrCJbxz7-HEkkV3jYOcsMeKcK1HA\n\n📚 JEE Maths Chapterwise Playlists (JEEt Lo 2021 & 2022): https://www.youtube.com/c/Vedantu/playlists?view=50&sort=dd&shelf_id=6\n\n📚 Decoded 🧐 - Playlist | Class 12 | JEE Main 2021 | JEE 2021 (Preparation): https://www.youtube.com/playlist?list=PLCtUyOrCJbxx88-cvwxEeAieVXWVMbSuh\n\nThe most sought-after exam – IIT JEE 2021 is considered a hard nut to crack by almost all the JEE aspirants appearing for it. Let's master Standard functions that will help you to solve Standard functions JEE Mains questions easier by Arvind Kalia Sir.\n\nHere’s a quick rundown of what you’re about to learn ⬇️\n✦ Standard functions IIT JEE\n✦ Standard functions JEE Mains 2021\n✦ Standard functions jee one shot\n✦ Standard functions Class 12 IIT JEE\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 (Online Coaching for IIT JEE | Online Classes for JEE | Online Course for IIT JEE (JEE Crash Course))\nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#StandardFunctions #JEEMaths #RefocusReviseReward #FunctionsIITJEE #FunctionsJEE #JEE2021#JEEMain2021 #VedantuJEE #JEECrashCourse #OnlineCoachingforIITJEE #OnlineClassesforJEE #OnlineCourseforIITJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop   \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Standard functions - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Standard functions IIT JEE Maths (Standard functions Vedantu JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CKwRjiamiIY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CKwRjiamiIY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CKwRjiamiIY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/CKwRjiamiIY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/CKwRjiamiIY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 9,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "CKwRjiamiIY"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "CKwRjiamiIY",
        "videoPublishedAt": "2020-12-10T09:31:59Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "J83J6bDoABHDXrGYLA1XtoV2muc",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS40NzZCMERDMjVEN0RFRThB",
      "snippet": {
        "publishedAt": "2022-02-08T11:18:55Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Conics | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3zk\n\nJEE Main 2023 (IIT JEE 2023). Worried about Conics for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Conic Section JEE Mains (Conic Sections Class 11 IIT JEE)(Conics Class 12) session for JEE 2023 at Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Conic Section JEE Mains (Conic Sections IIT JEE) (Conics Vedantu) by Arvind Kalia Sir. Learn more about Conics One Shot in LIVE & Solve your doubts only at Vedantu JEE. Let's learn JEE Main Maths (IIT JEE Maths) and crack JEE Main 2023 at ease. Here we will cover all the lectures based on Conic Sections  IIT JEE (Conics for IIT JEE)(Conic sections JEE Mains) (Conics math).\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/ztDcQ\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/ztDdf\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/ztDdJ\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/ztDe4\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/ztDew\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/ztDeQ\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n------------------------------------\n#Conics #JEEMaths #RefocusReviseReward #ConicSections #JEEMain2021 #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #JEE2021 #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Spectrum by Vedantu: https://vdnt.in/VSpectrum\n➡️ Momentum with Vedantu:  https://vdnt.in/Momentum \n➡️ NCERT 11th and 12th: https://vdnt.in/vncert \n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Conics JEE Mains (Conic sections IIT JEE)(Conic section JEE Mains) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Conics IIT JEE maths (Conics one shot) (Conics revision)(Conics explained) / Conic sections formulas.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YM2QjLT6KwQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YM2QjLT6KwQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YM2QjLT6KwQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/YM2QjLT6KwQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/YM2QjLT6KwQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 10,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "YM2QjLT6KwQ"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "YM2QjLT6KwQ",
        "videoPublishedAt": "2020-10-30T12:01:00Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "BgbRroc4-w3oBskXKbaz0f9-tw0",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS5EMEEwRUY5M0RDRTU3NDJC",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Integration | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj33s\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Integration for JEE Mains 2023? (Integration IIT JEE) (JEE Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Integration JEE Mains 2023 a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Integration One Shot | Integration Class 12 IIT JEE by Arvind Kalia Sir. Learn more about the Integration in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zrJbU\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zrJcd\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zrJcK\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zrJdn\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zrJdZ\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zrJex\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 (Online Coaching for IIT JEE | Online Classes for JEE | Online Course for IIT JEE (JEE Crash Course))\nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#Integration #JEEMaths #RefocusReviseReward #IntegrationJEEMains #IntegrationJEE #JEE2023#JEEMain2023 #VedantuJEE #JEECrashCourse #OnlineCoachingforIITJEE #OnlineClassesforJEE #OnlineCourseforIITJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop   \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Integration - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Integration IIT JEE Maths (Integration Vedantu JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/E0cXspuQ1A0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/E0cXspuQ1A0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/E0cXspuQ1A0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/E0cXspuQ1A0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/E0cXspuQ1A0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 11,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "E0cXspuQ1A0"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "E0cXspuQ1A0",
        "videoPublishedAt": "2020-12-11T08:41:56Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "TAgvbX_DWl-A8AvMuxQpGib6MtI",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS45ODRDNTg0QjA4NkFBNkQy",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Differential Equations | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj4at\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Differential Equations for JEE Mains 2023? (Differential Equations IIT JEE) (JEE Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Differential Equations JEE Mains 2023 a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Differential Equations One Shot JEE by Arvind Kalia Sir. Learn more about the Differential Equations in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zvtNW\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zvtPd\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zvtPz\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zvtPM\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zvtQE\n✅ JEE 2024 Pro Lite - English:-https://vdnt.in/zvtQQ\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 (Online Coaching for IIT JEE | Online Classes for JEE | Online Course for IIT JEE (JEE Crash Course))\nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#DifferentialEquations #JEEMaths #RefocusReviseReward #jee2023 #JEEMain2021 #VedantuJEE #JEECrashCourse #OnlineCoachingforIITJEE #OnlineClassesforJEE #OnlineCourseforIITJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop   \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ Vedantu JEE Enthuse English: https://vdnt.in/enthuse\n➡️ Vedantu NEET Elite English: https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Differential Equations - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Differential Equations IIT JEE Maths (Differential Equations Vedantu JEE) (Differential Equations One Shot JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/C6pUrs-7G9s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/C6pUrs-7G9s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/C6pUrs-7G9s/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/C6pUrs-7G9s/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/C6pUrs-7G9s/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 12,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "C6pUrs-7G9s"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "C6pUrs-7G9s",
        "videoPublishedAt": "2020-12-29T08:22:13Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "udA6w6cAoSySLpvr-olgGdsLBjg",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS4zMDg5MkQ5MEVDMEM1NTg2",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Range of Function | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Range of Function | JEE Main 2023 | Refocus-Revise-Reward 🏆 | Arvind Kalia Sir | Vedantu JEE\n\nClick here to play the quiz https://vdnt.in/xj41s\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Range of a Function for JEE Mains 2023? (Range of a Function IIT JEE) (JEE Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Range of a Function JEE Mains 2023 a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Range of a Function One Shot JEE | Finding Range of Function by Arvind Kalia Sir. Learn more about the Range of Function in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zu3Sv\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zu3SB\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zu3SD\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zu3SZ\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zu3T7\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zu3Tc\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 (Online Coaching for IIT JEE | Online Classes for JEE | Online Course for IIT JEE (JEE Crash Course))\nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#RangeofaFunction #JEEMaths #RefocusReviseReward #FunctionsIITJEE #FunctionsJEE #JEE2023#JEEMain2023 #VedantuJEE #JEECrashCourse #OnlineCoachingforIITJEE #OnlineClassesforJEE #OnlineCourseforIITJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop   \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ Vedantu JEE Enthuse English: https://vdnt.in/enthuse\n➡️ Vedantu NEET Elite English: https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Range of a Function - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Range of a Function IIT JEE Maths (Range of a Function Vedantu JEE) (Range of a Function One Shot JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/kpdaTpuWyNc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/kpdaTpuWyNc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/kpdaTpuWyNc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/kpdaTpuWyNc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/kpdaTpuWyNc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 13,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "kpdaTpuWyNc"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "kpdaTpuWyNc",
        "videoPublishedAt": "2020-12-18T16:26:28Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "GSU6dSdKH1U-9MjfXm0GMzevYnE",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS41Mzk2QTAxMTkzNDk4MDhF",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Application of Derivatives | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3Wv\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Application of Derivatives for JEE Mains 2023? (Application of Derivatives IIT JEE) (JEE Main ). Arvind Kalia Sir is here 👉 with ONE SHOT - Application of Derivatives JEE Mains 2023 a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Application of Derivatives One Shot | Application of Derivatives Class 12 IIT JEE by Arvind Kalia Sir. Learn more about the Application of Derivatives in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zu52A\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zu52K\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zu52V\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zu537\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zu53e\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zu53j\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 (Online Coaching for IIT JEE | Online Classes for JEE | Online Course for IIT JEE (JEE Crash Course))\nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#ApplicationofDerivatives #JEEMaths #RefocusReviseReward #ApplicationofDerivativesIITJEE  #ApplicationofDerivativesClass12 #jee2023 #jeemain2023  #VedantuJEE #JEECrashCourse #OnlineCoachingforIITJEE #OnlineClassesforJEE #OnlineCourseforIITJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop   \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Application of derivatives - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Application of derivatives IIT JEE Maths (Application of derivatives Vedantu JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/gHVyk0pK3sw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/gHVyk0pK3sw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/gHVyk0pK3sw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/gHVyk0pK3sw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/gHVyk0pK3sw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 14,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "gHVyk0pK3sw"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "gHVyk0pK3sw",
        "videoPublishedAt": "2020-12-08T09:26:57Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "A5J_DYMwDyZoaDFraruYvAVa5I4",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS5EQUE1NTFDRjcwMDg0NEMz",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Probability | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3fE\n\nJEE Main 2023 (IIT JEE 2023) - JEE Maths. Worried about Probability for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - Probability JEE Mains a session for JEE 2023 at the Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the probability IIT JEE (Probability One Shot) (Class 12 Maths Chapter 13) (Probability maths) (Probability Vedantu JEE) by Arvind Kalia Sir. Learn more about Probability Class 12 IIT JEE in LIVE & Solve your doubts only at Vedantu JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zrS3Y\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zrS2i\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zrRZN\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zrRYe\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zrRW9\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zrRUb\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n#Probability #JEEMaths #RefocusReviseReward #JEE2023#JEEMain2023 #VedantuJEE #IITJEEPreparation #ArvindKaliaSir #StayHomeWithMe #LearnLiveOnline #LearningWontStop \n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ NTSE V-Foundation: https://www.youtube.com/channel/UCH1PPGwhYWgP0bIx21iwk9A?sub_confirmation=1\n➡️ V Commerce 11 & 12: https://vdnt.in/vcommerce\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on Probability - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Probability IIT JEE Maths (Probability for JEE Mains) (Probability for IIT JEE) (Probability Class 12 IIT JEE) (Probability Vedantu JEE).",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/M5K5yQyGbbc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/M5K5yQyGbbc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/M5K5yQyGbbc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/M5K5yQyGbbc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/M5K5yQyGbbc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 15,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "M5K5yQyGbbc"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "M5K5yQyGbbc",
        "videoPublishedAt": "2020-11-24T12:34:59Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "gSxrau2XJjcXNYvxHBxWnM9bfPs",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS41QTY1Q0UxMTVCODczNThE",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "3D Geometry | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3ZH\n\nJEE Main 2023 (IIT JEE 2023). Worried about 3D Geometry (Three dimensional geometry) for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE SHOT - 3D Geometry IIT JEE session for JEE 2023 at Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the 3D Geometry JEE Mains (3D Geometry Class 12) (3d geometry vedantu) by Arvind Kalia Sir. Learn more about 3D Geometry one shot in LIVE & Solve your doubts only at Vedantu JEE. Let's learn JEE Main Maths (IIT JEE Maths) and crack JEE Main 2023 at ease. Here we will cover all the lectures based on 3D Geometry IIT JEE.\n\n🔥🔥 Hello Students, the KBC HOT SEAT is waiting for you. Play VQuiz and stand a chance to get shortlisted to play Fastest Finger First on KBC. Hurry Up and grab your chance! Download Vedantu Learning App Now! ➡️ https://vedantu.app.link/qKQGWkY900\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/zu4pg\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/zu4pq\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/zu4px\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/zu4pB\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/zu4pJ\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/zu4pQ\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n------------------------------------\n#3DGeometry #JEEMaths #RefocusReviseReward #jeemain2023  #VedantuJEE #JEEMainMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ V Enthuse (JEE English): https://vdnt.in/enthuse\n➡️ NEET Elite (NEET English): https://vdnt.in/velite\n➡️ Spectrum by Vedantu: https://vdnt.in/VSpectrum\n➡️ Momentum with Vedantu:  https://vdnt.in/Momentum \n➡️ NCERT 11th and 12th: https://vdnt.in/vncert \n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n\nThanks for watching this Refocus-Revise-Reward session on 3D Geometry JEE Mains (3D Geometry IIT JEE) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about 3D Geometry IIT JEE maths (3D Geometry one shot) (3D Geometry revision)(Maths 3D Geometry) / Three dimensional geometry JEE Mains.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2IGOC8pk7uw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2IGOC8pk7uw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2IGOC8pk7uw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/2IGOC8pk7uw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/2IGOC8pk7uw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 16,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "2IGOC8pk7uw"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "2IGOC8pk7uw",
        "videoPublishedAt": "2020-10-20T12:35:25Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "RYEjeQJj5BBN7SMEIKrOol4U6fE",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS4yMUQyQTQzMjRDNzMyQTMy",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Vectors | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "Click here to play the quiz https://vdnt.in/xj3CZ\n\nJEE Main 2023 (IIT JEE 2021). Worried about Vectors for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE-SHOT - Vectors IIT JEE session for JEE 2023 at Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Vectors JEE Mains (Vectors maths Class 12) (JEE Main Mathematics Vector algebra) by Arvind Kalia Sir. Learn more about Vectors one shot in LIVE & Solve your doubts only at Vedantu JEE. Let's learn JEE Main Maths (IIT JEE Maths) and crack JEE Main 2023 at ease. Here we will cover all the lectures based on Vectors IIT JEE.\n\n🔥🔥 Hello Students, the KBC HOT SEAT is waiting for you. Play VQuiz and stand a chance to get shortlisted to play Fastest Finger First on KBC. Hurry Up and grab your chance! Download Vedantu Learning App Now! ➡️ https://vedantu.app.link/qKQGWkY900\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/ztSL5\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/ztSLt\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/ztSLR\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/ztSMh\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/ztSML\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/ztSNa\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n--------------\n#Vectors #JEEMaths #RefocusReviseReward #jeemain2023  #VedantuJEE #JEEMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ Spectrum by Vedantu: https://vdnt.in/VSpectrum\n➡️ Momentum with Vedantu:  https://vdnt.in/Momentum  \n➡️ Vedantu Math Pirates - Class 8: http://vdnt.in/mathpirates\n➡️ Vedantu 9th & 10th English: https://vdnt.in/9n10Eng\n➡️ NCERT 11th and 12th: https://vdnt.in/vncert\n\nThanks for watching this Refocus-Revise-Reward session on Vectors JEE Mains (Vectors IIT JEE) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Vectors IIT JEE maths (Vectors one shot) (Vectors revision)(Vector mathematics) / JEE Main Mathematics Vector algebra.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/3dmgS1hGVsI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/3dmgS1hGVsI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/3dmgS1hGVsI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/3dmgS1hGVsI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/3dmgS1hGVsI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 17,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "3dmgS1hGVsI"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "3dmgS1hGVsI",
        "videoPublishedAt": "2020-10-16T12:01:56Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "C5NA4WXguOB0j0uOhjAWpSLcGz8",
      "id": "UExDdFV5T3JDSmJ4eHlOT3V0TnRncExvbjk3ZllwZFVRSS45RTgxNDRBMzUwRjQ0MDhC",
      "snippet": {
        "publishedAt": "2022-02-08T11:19:32Z",
        "channelId": "UClaQJq84XMtMkL44zDmL-Tg",
        "title": "Determinants and Matrices | One Shot | Refocus-Revise-Reward | Arvind Kalia Sir | Vedantu",
        "description": "ONE SHOT - Determinants and Matrices | JEE Main 2023 | Refocus-Revise-Reward 🏆 | Arvind Kalia Sir\n\n🧾📢Click here to play the quiz: https://vdnt.in/xqu7J\n\nJEE Main 2023 (IIT JEE 2021). Worried about Determinants and Matrices for JEE Mains 2023? (JEE Main Maths). Arvind Kalia Sir is here 👉 with ONE-SHOT - Matrices and Determinants IIT JEE session for JEE 2023 at Refocus-Revise-Reward series. Let's crack JEE Main 2023 (JEE Droppers) by knowing the Matrices and Determinants JEE Mains (Matrices and Determinants Class 12) (JEE Main Mathematics Matrices and Determinants) by Arvind Kalia Sir. Learn more about Matrices and Determinants one shot in LIVE & Solve your doubts only at Vedantu JEE. Let's learn JEE Main Maths (IIT JEE Maths) and crack JEE Main 2023 at ease. Here we will cover all the lectures based on Matrices and Determinants IIT JEE.\n\n➡️ Avail all Exciting Vedantu Courses 🔥 by clicking on the links below 🤑\n✅ JEE LIVE Crash Course - Hinglish:- https://vdnt.in/ztUsX\n✅ JEE LIVE Crash Course - English:- https://vdnt.in/ztUtg\n✅ JEE 2023 Pro Lite - Hinglish:- https://vdnt.in/ztUtQ\n✅ JEE 2023 Pro Lite - English:- https://vdnt.in/ztUu5\n✅ JEE 2024 Pro Lite - Hinglish:- https://vdnt.in/ztUun\n✅ JEE 2024 Pro Lite - English:- https://vdnt.in/ztUuG\n✅ whatsapp vedantu - English :- https://vdnt.in/zmZqs\n\n\nThe most sought-after exam – IIT JEE 2023 is considered as a hard nut to crack by almost all the JEE aspirants appearing for it. Let's master on Matrices and Determinants IIT JEE (Matrices and Determinants JEE Mains) (Matrices and Determinants class 12) (JEE Main Mathematics Matrices and Determinants) that will help you to solve Matrices and Determinants JEE Mains Questions easier by Arvind Kalia Sir.\n\nHere’s a quick rundown of what you’re about to learn ⬇️\n✦ Determinants and Matrices IIT JEE (Matrices and Determinants JEE Mains)\n✦ Determinants and Matrices for JEE Droppers\n✦ Matrices and Determinants one shot (Matrices and Determinants Vedantu)\n✦ JEE Main Mathematics Matrices and Determinants (Matrices and Determinants class 12)\n\nSounds Amazing?\n\nSUBSCRIBE to get higher rankings in JEE Main & JEE Advanced exams! and don’t forget to turn on your notifications 🔔 \nhttps://www.youtube.com/channel/UClaQJq84XMtMkL44zDmL-Tg?sub_confirmation=1\n\n------\n#DeterminantsandMatrices #jeemain2023  #RefocusReviseReward #VedantuJEE  #JEEMaths #StayHomeWithMe #Withme #LearningWontStop #jee2023  #IITJEEPreparation #ArvindKaliaSir\n\nFollow us on 👍 Facebook: https://www.facebook.com/VedantuInnovations/ \nPeep us on 📸 Instagram: https://www.instagram.com/vedantu_learns/\n\nSubscribe to Vedantu's New & Awesome Channels:\n➡️ Spectrum by Vedantu: https://vdnt.in/VSpectrum\n➡️ Momentum with Vedantu:  https://vdnt.in/Momentum  \n➡️ Vedantu Math Pirates - Class 8: http://vdnt.in/mathpirates\n➡️ NCERT 11th and 12th: https://vdnt.in/vncert\n\nThanks for watching this Refocus-Revise-Reward session on Determinants and Matrices\n JEE Mains (Matrices and Determinants IIT JEE) - JEE Main Maths (JEE Maths). Hope you have enjoyed and learned more about Matrices and Determinants IIT JEE Maths.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UNquP5M0lMc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UNquP5M0lMc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UNquP5M0lMc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/UNquP5M0lMc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/UNquP5M0lMc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Vedantu JEE",
        "playlistId": "PLCtUyOrCJbxxyNOutNtgpLon97fYpdUQI",
        "position": 18,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "UNquP5M0lMc"
        },
        "videoOwnerChannelTitle": "Vedantu JEE",
        "videoOwnerChannelId": "UClaQJq84XMtMkL44zDmL-Tg"
      },
      "contentDetails": {
        "videoId": "UNquP5M0lMc",
        "videoPublishedAt": "2020-10-13T11:52:03Z"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 20,
    "resultsPerPage": 25
  }
}








var chem={
  "kind": "youtube#playlistItemListResponse",
  "etag": "3mvSCOMRSqIFoNxYOYJjDxWbLwA",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "Sa0469sdtLwGj-PwwhqzZCDiPwg",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy41NkI0NEY2RDEwNTU3Q0M2",
      "snippet": {
        "publishedAt": "2022-03-14T15:49:09Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "MOLE CONCEPT in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Shivam Sir of PhysicsWallah is explaining to you about the Mole Concept.\n \nIn this lecture, we have covered these important topics – \n•        Introduction to Mole Concept\n•        Units of Pressure and their Relation\n•        Density\n•        Stoichiometry\n•        Limiting Reagent\n•        Percentage Yield and Percentage Purity\n•        Sequential Reactions\n•        Parallel Reactions\n•        Principal of Atom Conservation\n•        Percentage Composition of an Element\n•        Empirical Formula and Molecular Formuls\n•        Concentration Terms\n•        Mixing of Solutions\n•        Volume Strength of H2O2\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTime Stamp\n00:00 Intro\n2:03 Topics\n3:00 Introduction to Mole\n22:23 Mole Chart\n27:00 Questions\n44:45 Questions\n1:06:25 Unit of pressure and Their relation\n1:25:10 Questions\n1:38:30 Density\n1:53:45 Questions\n2:12:40 Stoichiometry\n2:22:20 Questions\n2:43:50 Limiting Reagent\n3:02:24 BREAK 1 🔴\n3:20:43 Questions\n3:58:30 Percentage yield\n4:17:00 Percentage Purity\n4:32:00 Problems related to Sequential reaction\n4:55:00 Problems related with parallel Reaction\n5:11:00 Problems based on mixture\n5:24:00 Questions\n5:30:30 Principal of Atom conservation\n5:42:55 Questions\n5:58:10 BREAK 2 🔴\n6:16:03 Questions\n6:20:30 Percentage composition of an element\n6:27:35 Empirical formula & Molecular formulae\n6:50:00 Questions\n6:53:50 Concentration terms\n6:59:13 Mass Percentage\n7:09:02 Volume volume Percentage\n7:23:35 Molarity\n7:27:50 Questions\n7:30:15 Molality\n7:38:40 Questions\n7:48:50 Dilution\n7:57:15 Mixing of solution\n8:11:35 Reaction in solution\n8:14:55 Questions\n8:35:22 Volume strength of H2O2\n8:40:40 Questions\n9:07:15 ThankU ❤\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#MoleConcept #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/p7vIrTXJpp8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/p7vIrTXJpp8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/p7vIrTXJpp8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/p7vIrTXJpp8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/p7vIrTXJpp8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "p7vIrTXJpp8"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "p7vIrTXJpp8",
        "videoPublishedAt": "2022-03-15T21:18:20Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "p7RF_J3D1yIfKYR9MD5rR75NMp8",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4yODlGNEE0NkRGMEEzMEQy",
      "snippet": {
        "publishedAt": "2022-03-20T14:50:33Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ATOMIC STRUCTURE in 1 Shot (PART - 1) From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTimestamp-\n00:00\ufeff Start\n\ufeff04:21\ufeff Weightage\n\ufeff06:25\ufeff Discovery \n\ufeff13:36\ufeff Electron vs Proton\n\ufeff35:27\ufeff Discovery of neutron\n\ufeff40:56\ufeff Chart \n\ufeff44:15\ufeff Questions\n\ufeff57:35\ufeff Thomson's Atomic model\n\ufeff01:01:28\ufeff Rutherford experiment\n\ufeff01:14:21\ufeff Csd #1\n\ufeff01:18:37\ufeff Density of nucleus\n\ufeff01:24:45\ufeff Volume ratio of nucleus & atom\n\ufeff01:27:34\ufeff Csd #2\n\ufeff01:32:56\ufeff Questions\n\ufeff01:40:13\ufeff Distance of closest approach\n\ufeff01:49:37\ufeff Questions\n\ufeff01:54:27\ufeff Dual nature of light\n\ufeff02:04:03\ufeff Questions\n\ufeff02:12:31\ufeff Photo electric effect\n\ufeff02:23:54\ufeff Questions\n\ufeff02:29:08\ufeff Advanced Questions\n\ufeff02:40:57\ufeff Stopping voltage\n\ufeff02:46:38\ufeff Graph\n\ufeff02:54:04\ufeff Questions\n\ufeff02:56:50\ufeff BREAK 1\n\ufeff03:12:16\ufeff Bohr's theory\n\ufeff03:21:30\ufeff Radius of atom\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#AtomicStructure #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MiSCN9HsRv0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MiSCN9HsRv0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MiSCN9HsRv0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/MiSCN9HsRv0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/MiSCN9HsRv0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "MiSCN9HsRv0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "MiSCN9HsRv0",
        "videoPublishedAt": "2022-03-21T16:21:58Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "FRuWfvNZCNliL_JZbMxGZOjuUWY",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4wMTcyMDhGQUE4NTIzM0Y5",
      "snippet": {
        "publishedAt": "2022-03-21T16:34:10Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ATOMIC STRUCTURE in 1 Shot (PART - 2) From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Amit Sir of PhysicsWallah is explaining to you about the Atomic Structure.\n \nIn this lecture, we have covered these important topics – \n•        Spectrum\n•        Sommerfeld’s Extension of Bohr’s Model of Atom\n•        Limitation of Bohr’s Model\n•        De-Broglie’s Wave Nature\n•        Heisenberg’s Uncertainty Principle\n•        Quantum Mechanical Model of Atom\n•        Quantum Numbers\n•        Orbital Wavefunction\n•        Aufbau’s Rule\n•        Pauli’s Exclusion Principle\n•        Hund’s Rule\n•        Exceptional Configurations\n•        Nodal Planes\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTimestamp -\n00:00 Intro\n02:06 Electromagnetic Spectrum\n03:52 Emission Spectrum\n07:04 Absorption Spectrum\n09:48 Emission Spectrum in detail\n17:33 Rydberg's Formula\n19:56 Characteristics of H-Spectrum\n30:18 Questions\n42:27 Max no. of Spectral Lines\n54:32 Sommerfeld's Extension\n1:00:43 Limitations of Bohr's Model\n1:07:40 Dual Nature of Radiation\n1:12:31 De-Brogile's Wave Nature\n1:29:50 Questions\n1:51:20 Heisenberg's Uncertainty Principal\n2:01:27 Questions\n2:10:39 BREAK\n2:25:56 Quantum Mechanical Model\n2:24:33 Quantum Numbers\n3:00:52 Orbital Wave Function\n3:03:03 Node\n3:07:23 Diff types of orbitals\n3:13:54 Graphs\n3:26:25 Aufbau's rule\n3:47:16 Pauli's exclusion principle\n3:52:26 Exceptional configurations\n3:54:43 Nodal plane\n4:00:34 Questions\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#AtomicStructure #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/h4Oek9Me0Ss/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/h4Oek9Me0Ss/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/h4Oek9Me0Ss/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/h4Oek9Me0Ss/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/h4Oek9Me0Ss/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "h4Oek9Me0Ss"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "h4Oek9Me0Ss",
        "videoPublishedAt": "2022-03-22T10:18:07Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "s9ngCETFWAMe3x6Qj5OAUrfHdek",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy41MjE1MkI0OTQ2QzJGNzNG",
      "snippet": {
        "publishedAt": "2022-03-24T15:44:50Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "CHEMICAL BONDING in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Amitabh Sharma Sir of PhysicsWallah is explaining to you about the Chemical Bonding.\n \nIn this lecture, we have covered these important topics – \n•        Chemical Bond\n•        Electrovalent or Ionic Bond\n•        Covalent Bonds and Classification\n•        Overlapping\n•        Bond Length and Bond Order\n•        Lewis Dot Structure\n•        Formal Charge\n•        Hybridization\n•        Valence Shell Electron Pair Repulsion Theory\n•        Bent’s Rule\n•        Drago’s Rule\n•        Back Bonding\n•        Molecular Orbital Theory and Energy Diagram\n•        Nodal Planes\n•        Dipole Moment (Ionic Nature in Covalent Bonds)\n•        Hydrogen Bond\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\nTimestamp-\n00:00 Intro\n8:08 Basics \n20:41 Octet rule \n33:20 Classification of bonds \n34:50 Ionic bond \n54:00 Question \n58:18 Covalent bond \n1:11:20 Overlapping \n1:16:08 Types of overlapping \n1:28:04 Exception \n1:29:00 Order of st. of overlapping \n1:58:06 Break\n2:15:40: lewis dot structures\n2:25:25 Formal chrge \n2:32:35 Resonace \n2:34:15 Bond order \n2:36:00 trick \n2:37:35 Hybridisation \n3:18:01 How to find hybridisation \n3:35:16 VSEPR Theory \n3:46:26 bents rule\n3:52:25 how to find s chrctr\n4:08:04 Break 2\n4:25:19 Order of bond length \n4:37:23 Drago's rule \n4:44:39 Backbonding \n5:01:50 Fajan's Rule \n5:38:30 Molecular Orbital Theory \n6:12:40 Break \n6:29:18 Nodal Planes \n6:44:54 Dipole Movement \n6:59:38 Hydrogen Bond \n\n#ChemicalBonding #Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Usl3XhIiQe4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Usl3XhIiQe4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Usl3XhIiQe4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Usl3XhIiQe4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Usl3XhIiQe4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Usl3XhIiQe4"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "Usl3XhIiQe4",
        "videoPublishedAt": "2022-03-25T19:25:37Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "WkiVxUxd9bQYvDZuZiLLIzkToXo",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4wOTA3OTZBNzVEMTUzOTMy",
      "snippet": {
        "publishedAt": "2022-03-27T16:26:45Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "General Organic Chemistry (GOC) in 1 Shot (PART - 1) From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTimestamp:-\n00:00 Intro\n01:25 Basics\n07:58 Inductive effect\n1:10:15 Hyper Conjugation\n1:41:32 Orbital overlapping Approch\n1:51:30 H effect\n2:09:00 BREAK 1\n2:24:00 Resonance\n2:51:16 Stability of RS\n3:05:00 questions \n3:28:22 R and m effect\n3:42:12 small terms\n3:55:33 app of m effect\n4:29:40 BREAK 2\n4:44:40 Ques\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#GOC #GeneralOrganicChemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1vxoueq2jP0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1vxoueq2jP0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1vxoueq2jP0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/1vxoueq2jP0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/1vxoueq2jP0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "1vxoueq2jP0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "1vxoueq2jP0",
        "videoPublishedAt": "2022-03-28T18:09:27Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "FN9CT-pRMVu-wPX6u93LBZcsDZc",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4xMkVGQjNCMUM1N0RFNEUx",
      "snippet": {
        "publishedAt": "2022-03-29T03:03:09Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "General Organic Chemistry (GOC) in One Shot (PART - 2) From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTimestamp:-\n00:00 Intro\n1:48 ACIDIC STRENGTH IN DIFFERENT FAMILIES\n16:35 QUESTION 1\n26:23 Na,NaH , NaNH2 test\n29:55 NaOH test\n31:57  NaNCO3 test \n33:28 Note\n35:37 Questions \n58:51 Note \n1:00:03 Basic strength \n1:03:23 Nitrogenous bases\n1:04:55 Series\n1:06:33 Explanation of series\n1:14:40 Steric inhibition in resonance \n1:19:34 Questions \n1:27:06 Steric inhibition in protonation \n1:32:20 Questions \n1:35:28 Note \n1:36:15 Carbanion bases \n1:38:20 Questions \n1:56:20 Break\n2:17:33 Aromaticity \n2:20:28 practice questions \n2:32:45 order of stability \n2:33:07 Exception\n2:37:00 applications of aromaticity\n2:39:00 Rotational energy barrier \n2:42:09 Reaction with acids\n2:44:18 Rate if protonation \n2:46:06 Acidic strength\n2:48:02 Reactivity towards AgNO3/SbCl5\n2:50:21 Questions \n3:02:33 Heat of Hydrogenation \n3:05:38 Heat of combustion \n3:08:40 Questions \n3:13:25 Electrophiles and Nucleophiles\n3:16:54 Stability of intermediates\n3:21:13 Questions\n3:23:25 properties for carbocation\n3:24:06 Questions \n3:27:45 Stability of Carbanion\n3:29:18 properties of Carbanion \n3:30:37 Questions \n3:32:57 Stability of Free radical\n3:34:13 properties of free radical\n3:36:04 Questions \n3:37:33 Bond dissociation energy\n3:40:17 Questions \n3:52:21 Dancing resonance \n3:57:04 last question \n3:58:50 the end\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#GOC #GeneralOrganicChemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/3n80pAGC2d4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/3n80pAGC2d4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/3n80pAGC2d4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/3n80pAGC2d4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/3n80pAGC2d4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 5,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "3n80pAGC2d4"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "3n80pAGC2d4",
        "videoPublishedAt": "2022-03-29T10:21:57Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "TC8BPgcKM6_pDmXZR7o61abSpGo",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy41MzJCQjBCNDIyRkJDN0VD",
      "snippet": {
        "publishedAt": "2022-03-31T07:38:53Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THERMODYNAMICS in 1 Shot (PART - 1) | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Vineet Sir of PhysicsWallah is explaining to you about the Thermodynamics.\n \nIn this lecture, we have covered these important topics – \n•        Extensive and Intensive Variables\n•        State and Path Functions\n•        Reversible and Irreversible Process\n•        First Law of Thermodynamics\n•        Sign Conventions\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Thermodynamics #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Z5WyFubuUUg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Z5WyFubuUUg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Z5WyFubuUUg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Z5WyFubuUUg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Z5WyFubuUUg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 6,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Z5WyFubuUUg"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "Z5WyFubuUUg",
        "videoPublishedAt": "2022-03-31T13:00:15Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "TXt-63NTv3zSZhqRAooh9eTCRxY",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5DQUNERDQ2NkIzRUQxNTY1",
      "snippet": {
        "publishedAt": "2022-03-31T13:08:41Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THERMODYNAMICS in 1 Shot (PART - 2) | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Vineet Sir of PhysicsWallah is explaining to you about the Thermodynamics.\n \nIn this lecture, we have covered these important topics – \n•        Sign Conventions in FLOT\n•        Different Thermodynamic Processes\n•        Sign Conventions in Cyclic Reversible Processes\n•        Molar Heat Capacity and Total Heat Capacity\n•        Reversible and Irreversible Process\n•        Thermochemistry\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Thermodynamics #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vfmKZ-dRQ6s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vfmKZ-dRQ6s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vfmKZ-dRQ6s/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/vfmKZ-dRQ6s/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/vfmKZ-dRQ6s/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 7,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "vfmKZ-dRQ6s"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "vfmKZ-dRQ6s",
        "videoPublishedAt": "2022-03-31T20:24:35Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "pyfLwxao57fSrAcAtacmoLj2-h8",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy45NDk1REZENzhEMzU5MDQz",
      "snippet": {
        "publishedAt": "2022-04-02T11:35:58Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THERMODYNAMICS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTimestamp -\n00:00 Intro\n05:04 basics\n30:00 Rev and Irrev process\n48:40 1st Law\n1:31:00 Adia. & isothermal process\n1:56:13 Cyclic process\n2:14:01 Isobaric and Isochoric\n2:41:44 BREAK 1\n3:01:10 PYQs\n4:11:50 BREAK 2\n4:25:42 Entropy\n5:05:30 Gibbs energy\n5:33:06 Enthalpy\n6:01:00 Calorimeter\n6:07:00 BREAK 3\n6:24:00 cont.\n6:49:00 enthalpy types\n7:21:24 Hess Law\n \nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Thermodynamics #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/p_HW7fdSQJ8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/p_HW7fdSQJ8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/p_HW7fdSQJ8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/p_HW7fdSQJ8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/p_HW7fdSQJ8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 8,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "p_HW7fdSQJ8"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "p_HW7fdSQJ8",
        "videoPublishedAt": "2022-04-02T11:22:42Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "EYA5srAl4F3aWe50S0PYrZuy0mA",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5GNjNDRDREMDQxOThCMDQ2",
      "snippet": {
        "publishedAt": "2022-04-02T15:46:03Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "COORDINATION COMPOUND in 1 Shot (PART - 1) | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Amitabh Sir of PhysicsWallah is explaining to you about the Coordination Compound.\n \nIn this lecture, we have covered these important topics – \n•        Addition Compounds – Double Salts and Coordination Compounds\n•        Stability of Coordination Compounds\n•        Types of Complexes\n•        Types of Ligands\n•        Denticity of Ligands\n•        Ethylene diamine tetra acetic acid (EDTA)\n•        Chelating Ligand\n•        Synergic Bonding\n•        IR Stretching Vibrational Frequency\n•        Effective Atomic Number Concept\n•        Organometallic Compound\n•        IUPAC Nomenclature\n•        Structural Isomerism\n•        Stereoisomerism\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#CoordinationCompound #Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/aZ6M_gWA5sY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/aZ6M_gWA5sY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/aZ6M_gWA5sY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/aZ6M_gWA5sY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/aZ6M_gWA5sY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 9,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "aZ6M_gWA5sY"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "aZ6M_gWA5sY",
        "videoPublishedAt": "2022-04-03T19:10:32Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "2yPAQLoTeTGrFeQj1N5z8Elhe90",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy40NzZCMERDMjVEN0RFRThB",
      "snippet": {
        "publishedAt": "2022-04-04T02:54:06Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "COORDINATION COMPOUND in 1 Shot (PART - 2) | From Zero to Hero | JEE Main & Advanced",
        "description": "📽️ COORDINATION COMPOUND in 1 Shot (PART - 1) - https://youtu.be/aZ6M_gWA5sY\n\n📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Amitabh Sharma Sir of PhysicsWallah is explaining to you about the Coordination Compound.\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTimestamp -\n00:00 Intro\n02:12 Werner's Theory \n11:30 Example \n39:00 conductivity \n48:46 types of complex \n51:54 VBT \n54:14  types of ligands \n1:21:00 spectrochemical series \n1:29:55 Hybridisation on the basis of cn \n1:43:24  example of VBT \n1:52:25  break \n2:09:38 CFT \n2:39:25 pairing energy \n2:47:30 Dn system \n3:17:23 Transference \n3:21:29 CFT in tetrahedral coordination  \n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#CoordinationCompound #Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7ggf0jh3ZqE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7ggf0jh3ZqE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7ggf0jh3ZqE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/7ggf0jh3ZqE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/7ggf0jh3ZqE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 10,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "7ggf0jh3ZqE"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "7ggf0jh3ZqE",
        "videoPublishedAt": "2022-04-04T09:34:02Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "nkxtptuSSRCT-CIqwkwmNcrdK2U",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5EMEEwRUY5M0RDRTU3NDJC",
      "snippet": {
        "publishedAt": "2022-04-05T15:17:02Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "SOLUTIONS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/ \n\nIn this ongoing Manzil 2.0 Batch, Vineet Sir of PhysicsWallah is explaining to you about the Solutions.\n \nIn this lecture, we have covered these important topics – \n•        Colligative Properties\n-        Relative lowering of Vapour Pressure\n-        Osmotic Pressure\n-        Elevation in Boiling Point\n-        Depression in Freezing Point\n•        Henry’s Law\n•        Concentration Term\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n🌐 Website : https://bit.ly/physicswallah_org     \n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Solutions #JEEMain2022 #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/m70F-Nbk8sQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/m70F-Nbk8sQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/m70F-Nbk8sQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/m70F-Nbk8sQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/m70F-Nbk8sQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 11,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "m70F-Nbk8sQ"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "m70F-Nbk8sQ",
        "videoPublishedAt": "2022-04-06T18:35:43Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "YBHMe152I3mXasWdQvUaoD6TXys",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4zMDg5MkQ5MEVDMEM1NTg2",
      "snippet": {
        "publishedAt": "2022-04-13T13:55:47Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "CLASSIFICATION OF ELEMENTS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live\n\nIn this ongoing Manzil 2.0 Batch, Amitabh Sir of PhysicsWallah is explaining to you about the Classification of Elements and Periodicity in Properties.\n \nIn this lecture, we have covered these important topics – \n•        Mendeleev’s Periodic Table\n•        Modern Periodic Table\n•        S-Block\n•        P-Block\n•        Trick to find Atomic Number\n•        D-Block\n•        F-Block\n•        Defects of Periodic Table\n•        Nomenclature of Elements\n•        Exceptions in Electronic Configuration\n•        Screening Effect and Effective Nuclear Charge\n•        Atomic Radius\n•        D-Contraction\n•        Lanthanide Contraction\n•        Ionisation Energy\n•        Electron Affinity\n•        Electron Gain Enthalpy\n•        Electronegativity\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nTimestamp -\n00:00  Intro\n06:06  Periodic table\n07:22  Development of periodic table\n36:20  Mendeleev's periodic table\n1:00:32  Modern periodic table\n1:14:22  s-Block\n1:21:22  p-Block\n1:31:00  Trick to find the atomic number\n1:41:26  d-Block\n1:51:10  f-Block\n2:01:26  Q.S.P.\n2:03:54  Defects of modern periodic table\n2:04:16  Nomenclature of elements\n2:05:42  JEE Question\n2:07:16  Exceptions of electronic configuration\n2:09:50  Important points\n2:23:12  BREAK 1\n2:40:12  Questions\n2:43:22  JEE Questions\n2:48:22  Screening effect and effective nuclear charge\n3:52:20  Atomic radius\n4:30:16  d-Contraction\n4:34:38  Lanthanide contraction\n4:37:56  BREAK 2\n4:58:58  JEE Questions\n5:07:16  Ionisation potential/ energy/ enthalpy\n5:54:10  JEE Questions\n6:10:50  Electron affinity/ gain enthalpy\n6:34:34  Q.S.P.\n6:52:28  JEE Questions\n6:56:40  Electronegativity\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#CLASSIFICATIONOFELEMENTS #Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/mvL8BZx08g0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/mvL8BZx08g0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/mvL8BZx08g0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/mvL8BZx08g0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/mvL8BZx08g0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 12,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "mvL8BZx08g0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "mvL8BZx08g0",
        "videoPublishedAt": "2022-04-14T20:09:37Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "2-HqPU2CcXJ9R1thq6ALLgdEupk",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy41Mzk2QTAxMTkzNDk4MDhF",
      "snippet": {
        "publishedAt": "2022-04-20T13:20:45Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "EQUILIBRIUM in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.1 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live\n\nIn this ongoing Manzil 2.0 Batch, Nikhil Sir of PhysicsWallah is explaining to you about the p-Equilibrium.\n \nIn this lecture, we have covered these important topics – \n•        Chemical Equilibrium\n•        Law of Mass Action\n•        Properties of Equilibrium Constant\n•        Le-Ch atelier’s Principle\n•        Degree of Advancement of a Reaction\n•        Effect of Pressure\n•        Effect of Temperature\n•        Effect of Catalyst\n•        Relation between Gibbs Energy and Equilibrium Constant\n•        Effect of Addition of Inert Gas\n•        Ionic Equilibrium\n•        Electrolyte\n•        Arrhenius Acid Base Theory\n•        Calculation of pH\n•        Salt Hydrolysis\n•        Equivalence Point\n•        Buffers\n•        Salts\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#ChemicalEquilibrium #MANZIL2_1 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Zb5T3hhuGkw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Zb5T3hhuGkw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Zb5T3hhuGkw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Zb5T3hhuGkw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Zb5T3hhuGkw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 13,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Zb5T3hhuGkw"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "Zb5T3hhuGkw",
        "videoPublishedAt": "2022-04-22T00:45:32Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "3P2VcAWYXqv-BzKsfn5HX9jBhrs",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy41QTY1Q0UxMTVCODczNThE",
      "snippet": {
        "publishedAt": "2022-04-26T15:17:46Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THE SOLID STATE in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.1 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live\n\nIn this ongoing Manzil 2.0 Batch, Sarvesh Sir of PhysicsWallah is explaining to you about the Solid State.\n \nIn this lecture, we have covered these important topics – \n•        Types of Solids\n•        Unit Cell\n•        Table of Crystal Structure\n•        Cube (Primitive Unit Cell, Packing Efficiency)\n•        Body Centre Unit Cell\n•        Face Centre Unit Cell\n•        End Centre Unit Cell\n•        Hexagonal Unit Cell\n•        Voids in Crystals\n•        Examples (NaCl, CsCl, CaF2, ZnS)\n•        Crystalline Defects\n•        Magnetic Properties\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#TheSolidState #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wS8gAm7dpRU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wS8gAm7dpRU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wS8gAm7dpRU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/wS8gAm7dpRU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/wS8gAm7dpRU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 14,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "wS8gAm7dpRU"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "wS8gAm7dpRU",
        "videoPublishedAt": "2022-04-27T19:09:07Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "zgTO618aNQ8So8x5iwy0FAx105c",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4yMUQyQTQzMjRDNzMyQTMy",
      "snippet": {
        "publishedAt": "2022-05-01T15:07:40Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ELECTROCHEMISTRY in 1 Shot |  From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live  \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Electrochemistry #MANZIL2_0 #PhysicsWallah #JEE2022",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/091_PzdKsQs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/091_PzdKsQs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/091_PzdKsQs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/091_PzdKsQs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/091_PzdKsQs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 15,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "091_PzdKsQs"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "091_PzdKsQs",
        "videoPublishedAt": "2022-05-03T00:16:02Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "RDh9jWm2RHCspzXYDFpWeTcr6S0",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy45RTgxNDRBMzUwRjQ0MDhC",
      "snippet": {
        "publishedAt": "2022-05-05T15:19:23Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "CHEMICAL KINETICS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.1 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live\n\nIn this ongoing Manzil 2.0 Batch, Sarvesh Sir of PhysicsWallah is explaining to you about the Chemical Kinetics.\n \nIn this lecture, we have covered these important topics – \n•        Rate of Reaction\n•        Molecularity\n•        Order of Reaction\n•        Half Life Period\n•        1st Order Reaction\n•        Effect of Temperature on Rate of Reaction\n•        Activation Energy\n•        Temperature Coefficient\n•        Effect of Catalyst\n•        Collision Theory\n•        Arrhenius Equation\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#ChemicalKinetics #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/sqjSHWV9Qf0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/sqjSHWV9Qf0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/sqjSHWV9Qf0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/sqjSHWV9Qf0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/sqjSHWV9Qf0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 16,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "sqjSHWV9Qf0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "sqjSHWV9Qf0",
        "videoPublishedAt": "2022-05-06T18:20:44Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "RjAUWwROBQ2wWHN2gl5RfOPTC7c",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5ENDU4Q0M4RDExNzM1Mjcy",
      "snippet": {
        "publishedAt": "2022-05-08T15:10:20Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "SURFACE CHEMISTRY in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/ \n\nIn this ongoing Manzil 2.0 Batch, Vineet Sir of PhysicsWallah is explaining to you about the Surface Chemistry.\n \nIn this lecture, we have covered these important topics – \n•        Phenomenon of Adsorption\n•        Types of Adsorptions (Physical, Chemical)\n•        Thermodynamics of Adsorption\n•        Freundlich Isotherm\n•        Chromatography\n•        Types of Catalyst (Homogenous, Heterogenous)\n•        Selectivity vs Activity\n•        Enzymes\n•        Colloidal System\n•        Gold Number\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n🌐 Website : https://bit.ly/physicswallah_org     \n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#SurfaceChemistry #JEEMain2022 #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YEtOldjp4_I/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YEtOldjp4_I/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YEtOldjp4_I/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/YEtOldjp4_I/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/YEtOldjp4_I/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 17,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "YEtOldjp4_I"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "YEtOldjp4_I",
        "videoPublishedAt": "2022-05-09T18:00:12Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "cnILrSz99bV0f3sqi6hIa8-9v1o",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4yMDhBMkNBNjRDMjQxQTg1",
      "snippet": {
        "publishedAt": "2022-05-10T08:46:11Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "STATES OF MATTER in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nIn this ongoing Manzil 2.0 Batch, Nikhil Sir of PhysicsWallah is explaining to you about the p-States of Matter.\n \nIn this lecture, we have covered these important topics – \n•        Definition of a Phase\n•        Ideal Gas Equation\n•        Boyle’s Law\n•        Charles’s Law\n•        Gay Loussac’s Law\n•        Avogadro’s Law\n•        Dalton’s Law of Partial Pressures\n•        Vapour Pressure\n•        Graham’s Law of Efffusion\n•        Hydrostatic Pressure\n•        Kinetic Theory of Gases\n•        Average Speeds\n•        Boltzmann Distribution Curve\n•        Van der Waals Equation\n•        Liquefaction of Gasses\n•        Critical State\n•        Compressibility Factor\n•        Mean Free Path\n•        Collision Frequency\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah. \n\nComplete Physics In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3gg5klg1OCuojRv03azO48L\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#StatesOfMatter #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4FIU1tOCW_0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4FIU1tOCW_0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4FIU1tOCW_0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/4FIU1tOCW_0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/4FIU1tOCW_0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 18,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "4FIU1tOCW_0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "4FIU1tOCW_0",
        "videoPublishedAt": "2022-04-18T22:13:43Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "0XJ63DfmkVdjXJ5Yn3S6QFj11xs",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5GM0Q3M0MzMzY5NTJFNTdE",
      "snippet": {
        "publishedAt": "2022-05-18T14:22:13Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THE P-BLOCK ELEMENTS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live\n\nIn this ongoing Manzil 2.0 Batch, Amitabh Sir of PhysicsWallah is explaining to you about the p-Block Elements.\n \nIn this lecture, we have covered these important topics – \n•        Boron Family\n-        Physical Properties\n-        Chemical Properties\n•        Preparation of Boron\n•        Reaction of Boron\n•        Orthoboric Acid\n•        Diborane\n•        Alumina\n•        Aluminium Chloride\n•        Carbon Family\n-        Physical Properties\n-        Chemical Properties\n-        Catenation Property\n•        Carbon Monoxide\n•        Carbon Dioxide\n•        Silicon and its types\n•        Zeolites\n•        Nitrogen Family\n-        Physical Properties\n-        Chemical Properties\n•        Phosphorus Trioxide\n•        Oxygen Family\n-        Physical Properties\n-        Chemical Properties\n•        Dioxygen\n•        Sulphuric Acid\n•        Halogen Family\n-        Physical Properties\n-        Chemical Properties\n•        Hydrochloric Acid\n•        Interhalogen Compounds\n•        Pseudo halogens\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#The_P_BlockElements #Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/s0z-H0THr4E/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/s0z-H0THr4E/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/s0z-H0THr4E/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/s0z-H0THr4E/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/s0z-H0THr4E/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 19,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "s0z-H0THr4E"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "s0z-H0THr4E",
        "videoPublishedAt": "2022-05-18T15:11:50Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "6hNZ0kbn4TW8I6teSStAE_KPRfw",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4zRjM0MkVCRTg0MkYyQTM0",
      "snippet": {
        "publishedAt": "2022-05-21T11:30:46Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "D AND F BLOCK ELEMENTS  in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live\n\nIn this ongoing Manzil 2.0 Batch, Amitabh Sir of PhysicsWallah is explaining to you about the d and f-Block Elements.\n \nIn this lecture, we have covered these important topics – \n•        D-block Introduction\n•        Variations in \n-        Atomic Radius\n-        Ionization Energy\n-        Density\n-        Enthalpy of Atomization\n-        Oxidation States\n•        Permanganate [Cr2O7(2-)] / Chromate [CrO4(2-)]\n•        Zinc Chloride [ZnCl2]\n•        Copper Oxide [CuO]\n•        F-block Introduction\n•        Lanthanides\n-        Oxidation States\n-        Application\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#DBlockElements #Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IbH-Cmqce0o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IbH-Cmqce0o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IbH-Cmqce0o/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/IbH-Cmqce0o/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/IbH-Cmqce0o/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 20,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "IbH-Cmqce0o"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "IbH-Cmqce0o",
        "videoPublishedAt": "2022-05-21T11:30:47Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "WNFfr7bQ7wHHp8st7DwesH5eu2g",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy45NzUwQkI1M0UxNThBMkU0",
      "snippet": {
        "publishedAt": "2022-05-26T15:39:50Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "HALOALKANES AND HALOARENES in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#HaloalkanesAndHaloarenes #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zEiTyZqP234/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zEiTyZqP234/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zEiTyZqP234/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/zEiTyZqP234/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/zEiTyZqP234/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 21,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "zEiTyZqP234"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "zEiTyZqP234",
        "videoPublishedAt": "2022-05-27T17:49:38Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "dqvNtUTI08g2Rv2Zcoaj4En23_0",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5DNzE1RjZEMUZCMjA0RDBB",
      "snippet": {
        "publishedAt": "2022-05-30T11:30:26Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ALCOHOLS, PHENOLS AND ETHERS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#AlcoholsPhenolsAndEthers #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vJIUOCilzxA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vJIUOCilzxA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vJIUOCilzxA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/vJIUOCilzxA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/vJIUOCilzxA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 22,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "vJIUOCilzxA"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "vJIUOCilzxA",
        "videoPublishedAt": "2022-05-30T11:30:47Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "LgZElVMeByqVVPw_D0JCxq3yb34",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy43MTI1NDIwOTMwQjIxMzNG",
      "snippet": {
        "publishedAt": "2022-06-02T11:31:14Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ALDEHYDES KETONES AND CARBOXYLIC ACIDS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\nIn this ongoing Manzil 2.0 Batch, Rohit Agarwal sir of Physics Wallah is explaining to you about the Aldehydes, Ketones and Carboxylic acids. \n\nIn this one shot, we have covered these important topics –\n•        00:00 Start\n•        01:50 Method of Preparation of Carbonyl compound\n•        05:50 Method of Preparation of Aldehyde\n•        42:10 Method of Preparation of Ketone\n•        50:00 Chemical Properties of Carbonyl compounds\n•        2:40:00 Physical Properties of Carbonyl compounds\n•        2:46:40 Method of Preparation of Carboxylic acids\n•        3:08:36 Chemical Properties of Carboxylic acids\n•        3:39:02 Previous Year Questions\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Aldehydes #KetonesAndCarboxylicAcids #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jY4vxCf3yzs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jY4vxCf3yzs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jY4vxCf3yzs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/jY4vxCf3yzs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/jY4vxCf3yzs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 23,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "jY4vxCf3yzs"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "jY4vxCf3yzs",
        "videoPublishedAt": "2022-06-02T11:31:15Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "gDV6yyPClPxDpESylZUmTfBb7Nk",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5DQ0MyQ0Y4Mzg0M0VGOEYw",
      "snippet": {
        "publishedAt": "2022-06-04T14:22:56Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "AMINES in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Amines #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/EOj1-kOWHT8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/EOj1-kOWHT8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/EOj1-kOWHT8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/EOj1-kOWHT8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/EOj1-kOWHT8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 24,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "EOj1-kOWHT8"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "EOj1-kOWHT8",
        "videoPublishedAt": "2022-06-05T18:03:53Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "MOes7SUJQHlmEscH8S-gTeqj05I",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4yQUE2Q0JEMTk4NTM3RTZC",
      "snippet": {
        "publishedAt": "2022-06-04T14:24:32Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "HYDROCARBON in 1 Shot (PART 2) | From Zero to Hero | JEE Main & Advanced",
        "description": "HYDROCARBONS in 1 Shot (PART 1) : https://youtu.be/jD-amjIWlJg\n \n📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live \n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Hydrocarbon #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/WxZVG_3a6Kg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/WxZVG_3a6Kg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/WxZVG_3a6Kg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/WxZVG_3a6Kg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/WxZVG_3a6Kg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 25,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "WxZVG_3a6Kg"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "WxZVG_3a6Kg",
        "videoPublishedAt": "2022-06-01T04:30:06Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "vrIt_acBp9mQ6pYA08tT_5-E5R0",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5DMkU4NTY1QUFGQTYwMDE3",
      "snippet": {
        "publishedAt": "2022-06-08T09:55:45Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "BIOMOLECULES in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Biomolecules #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Q3ZrdZHvVxI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Q3ZrdZHvVxI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Q3ZrdZHvVxI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Q3ZrdZHvVxI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Q3ZrdZHvVxI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 26,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Q3ZrdZHvVxI"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "Q3ZrdZHvVxI",
        "videoPublishedAt": "2022-06-08T11:30:10Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "QJ1CeKrNAEBSV8Y1VGKl1qVDqOE",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy44Mjc5REFBRUE2MTdFRDU0",
      "snippet": {
        "publishedAt": "2022-06-12T15:30:08Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "POLYMER in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\nTimestamps - \n•        00:00 Introduction\n•        02:42 Test of Alcohol\n•        09:08 Test for Phenol\n•        14:23 Test of Biomolecules\n•        43:36 Source of Polymers\n•        45:20 Structure of Polymers\n•        47:14 Forces in Polymers\n•        49:20 Formation of Polymers\n•        1:39:16 Previous Year questions\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah: https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation:  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah: https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA: https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English:  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah: https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram: https://bit.ly/PwTelegram\n🌐 Facebook: https://bit.ly/PWFacebook07\n🌐 Instagram: https://bit.ly/PWInsta\n🌐 Twitter: https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP: https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website: https://www.physicswallah.live/contact-us\n\n#Polymer #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/iPOxMOCOIpY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/iPOxMOCOIpY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/iPOxMOCOIpY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/iPOxMOCOIpY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/iPOxMOCOIpY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 27,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "iPOxMOCOIpY"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "iPOxMOCOIpY",
        "videoPublishedAt": "2022-06-12T12:30:21Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "N5Y9GTBy9vt_2GvT2oY99odnHxI",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy43NDhFRTgwOTRERTU4Rjg3",
      "snippet": {
        "publishedAt": "2022-06-14T03:38:44Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ENVIRONMENTAL CHEMISTRY in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Main 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah: https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation:  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah: https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA: https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English:  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah: https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram: https://bit.ly/PwTelegram\n🌐 Facebook: https://bit.ly/PWFacebook07\n🌐 Instagram: https://bit.ly/PWInsta\n🌐 Twitter: https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP: https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website: https://www.physicswallah.live/contact-us\n\n#EnvironmentalChemistry  #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FfRmhuVS57A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FfRmhuVS57A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FfRmhuVS57A/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/FfRmhuVS57A/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/FfRmhuVS57A/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 28,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "FfRmhuVS57A"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "FfRmhuVS57A",
        "videoPublishedAt": "2022-06-14T03:38:45Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "uiz53NVChHmFSXUvjspqe-HTyo4",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy41QUZGQTY5OTE4QTREQUU4",
      "snippet": {
        "publishedAt": "2022-06-15T03:33:00Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THE S-BLOCK ELEMENTS in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live\n\nTimestamps - \n•        00:00 – Introduction\n•        03:16 – S-block\n•        06:24 – Physical Properties\n•        13:18 – Chemical Properties of IA group\n•        26:33 – Chemical Properties of IIA group\n•        31:57 – Compounds of IA group\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with @JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 PW - Hindi Medium : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#SBlockElements #Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/i_OLuqtHqgQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/i_OLuqtHqgQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/i_OLuqtHqgQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/i_OLuqtHqgQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/i_OLuqtHqgQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 29,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "i_OLuqtHqgQ"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "i_OLuqtHqgQ",
        "videoPublishedAt": "2022-06-15T03:30:07Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "6SY7RSLnwkBtNKNkkUV6eZ5pQew",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy4zRDBDOEZDOUM0MDY5NEEz",
      "snippet": {
        "publishedAt": "2022-06-16T07:51:19Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "REDOX REACTION in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\nTimestamps - \n•        00:00 Introduction\n•        05:30 Oxidation State\n•        21:42 Oxidation number\n•        35:05 Equivalent weight of Atom\n•        52:10 Equivalent weight of Molecules\n•        55:10 n-factor of Acid\n•        1:13:40 n-factor of Base\n•        1:21:44 n-factor of Salt\n•        1:33:08 Oxidation and Reduction process\n•        1:35:08 Redox reaction\n•        1:38:29 n-factor of Redox reaction\n•        2:13:49 Balancing of Redox reaction\n•        2:24:30 Number of gram equivalent\n•        2:43:04 Volumetric Analysis\n•        3:06:30 Iodimetry Titration\n•        3:13:43 Iodometry Titration\n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details:-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQs.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey: https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah: https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation:  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah: https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA: https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English:  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah: https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram: https://bit.ly/PwTelegram\n🌐 Facebook: https://bit.ly/PWFacebook07\n🌐 Instagram: https://bit.ly/PWInsta\n🌐 Twitter: https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP: https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website: https://www.physicswallah.live/contact-us\n\n#RedoxReaction #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tkDkeopn8JE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tkDkeopn8JE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tkDkeopn8JE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/tkDkeopn8JE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/tkDkeopn8JE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 30,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "tkDkeopn8JE"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "tkDkeopn8JE",
        "videoPublishedAt": "2022-06-11T12:30:37Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "KFjyqeZv9W9K1JK9b1XMgLIOzz8",
      "id": "UEx4eUdhUjNoRXkzaUUyVUtCampmX2h5RlRRTW1mNERlVy5CMEQ2Mjk5NTc3NDZFRUNB",
      "snippet": {
        "publishedAt": "2022-06-20T15:06:59Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "CHEMISTRY IN EVERYDAY LIFE in 1 Shot | From Zero to Hero | JEE Main & Advanced",
        "description": "📝 For complete notes of Lectures, visit MANZIL 2.0 Batch in the Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\nThere are many other important topics of Chemistry that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\nComplete Chemistry In One Shot Lectures - Manzil 2.0 | Crack JEE Main and Advanced 2022 - https://youtube.com/playlist?list=PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW\n--------------------------------------------------------------------------------------------------------------\n🔴 Batch Details :-\n\nThis batch is completely FREE.\n\nYou just have to click on BUY NOW button for your free subscription to the batch.\n\n✅ FREE Crash Course for JEE Mains 2022\n\n📝 COURSE DETAILS :\n\n• Live Lectures will be provided on JEE Wallah YouTube Channel.\n\n• Classes will start from 14th March 2022.\n\n• Lecture Notes will be available on PW App.\n\n• Weekly schedules of the lectures will be uploaded on the JEE Wallah Community page.\n\n• We will complete each chapter in 1 shot with theory & lots of PYQ's.\n\n• Lecture Schedule - MON to SUN 05:00PM \n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah: https://bit.ly/CompetitionWallah\n🌐 PhysicsWallah Foundation:  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah: https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA: https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English:  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah: https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram: https://bit.ly/PwTelegram\n🌐 Facebook: https://bit.ly/PWFacebook07\n🌐 Instagram: https://bit.ly/PWInsta\n🌐 Twitter: https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP: https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website: https://www.physicswallah.live/contact-us\n\n#Chemistry #MANZIL2_0 #PhysicsWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DfB6JQ8weHc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DfB6JQ8weHc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DfB6JQ8weHc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/DfB6JQ8weHc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/DfB6JQ8weHc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3iE2UKBjjf_hyFTQMmf4DeW",
        "position": 31,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "DfB6JQ8weHc"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "DfB6JQ8weHc",
        "videoPublishedAt": "2022-06-20T15:08:05Z"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 32,
    "resultsPerPage": 35
  }
}

var phy=
{
  "kind": "youtube#playlistItemListResponse",
  "etag": "F9fls2wHbbhQKVBNJN12bN-winY",
  "nextPageToken": "EAAaBlBUOkNDTQ",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "lrUQ9kztYGH9hTP4UN2K_G6lbwY",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC41NkI0NEY2RDEwNTU3Q0M2",
      "snippet": {
        "publishedAt": "2021-06-01T18:36:09Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "MANZIL Batch - Complete VECTORS in 1 Shot | Day 1",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PW APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\nIn this ongoing MANZIL Batch, Rajwant Sir of PhysicsWallah is explaining to you about the Vectors.\n \nIn this lecture, we have covered these important topics - \n•        Scalar and Vector\n•        Representation of Vector\n•        Angle between Two Vectors\n•        Type of Vectors\n•        Vector Addition\n•        Vector Subtraction\n•        Multiplication of Vector by Scalar\n•        Vector Dot Product / Scalar Product\n•        Vector Cross Product / Vector Product\n\nThere are many other important topics of Maths that we are going to cover in upcoming videos for JEE 2022 exam. Stay tuned with JEE Wallah.\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\nTIMESTAMP ⌚\n\n0:00 Intro\n5:34 Scalar and Vector\n20:09 Representation of vector\n24:50 Angle between two vectors\n35:28 Type of Vectors\n52:26 Unit Vector\n1:03:43 Position Vector\n1:05:40 Displacement Vector\n1:14:09 Resolution of Vector(2D)\n1:53:18 Vector Addition\n2:42:12 Subtraction of Vectors\n3:21:01 Multiplication of Vector by Scalar\nMultiplication of Vector by Vector\n3:23:10 Dot Product\n4:04:32 Cross Product.\n\n--------------------------------------------------------------------------------------------------------------\n\n📌 PHYSICS WALLAH OTHER CHANNELS :\n\n🌐 PhysicsWallah - Alakh Pandey : https://bit.ly/PhysicsWallah07\n🌐 Competition Wallah : https://bit.ly/CompetitionWallah\n🌐 JEE Wallah : https://bit.ly/JEEWallah\n🌐 PhysicsWallah Foundation :  https://bit.ly/PhysicsWallahFoundation\n🌐 NCERT Wallah : https://bit.ly/NCERTWallah\n🌐 Defence Wallah-NDA : https://bit.ly/DefenceWallah\n🌐 PhysicsWallah English :  https://bit.ly/PhysicsWallah-English\n🌐 BSEB Wallah : https://bit.ly/BSEBWallah\n\n📌 PHYSICS WALLAH SOCIAL MEDIA PROFILES :\n\n🌐 Telegram  : https://bit.ly/PwTelegram\n🌐 Facebook : https://bit.ly/PWFacebook07\n🌐 Instagram : https://bit.ly/PWInsta\n🌐 Twitter : https://bit.ly/PWTwitter07\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/LvDEO27plw0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/LvDEO27plw0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/LvDEO27plw0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/LvDEO27plw0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/LvDEO27plw0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "LvDEO27plw0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "LvDEO27plw0",
        "videoPublishedAt": "2021-05-28T17:26:34Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "C_j61gQR9A3QtleXgAOOZAVC6eo",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4yODlGNEE0NkRGMEEzMEQy",
      "snippet": {
        "publishedAt": "2021-06-01T18:36:33Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "Basic Mathematics in 1 Shot - All Concepts, Tricks & PYQs | Class 11 | JEE Main/Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS - \n\n0:00  Introduction\n6:40 Basic Differentiation \n18:08 Maxima and Minima\n29:00 Questions\n1:34:02 Break 1\n1:51:37 Questions\n2:21:30 Some Extra Points\n2:33:44 Questions\n3:02:54 BREAK 2\n3:15:55 Gradient of Scalar\n3:32:46 Basics of Integration\n3:44:47 Formation of Element\n4:11:06 Questions\n4:34:20 Break 3\n4:54:16 Questions\n5:24:33 JEE Advanced PYQs\n5:49:25 Curl of Vector\n5:51:31 Good bye\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/cqC0cnzXjHI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/cqC0cnzXjHI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/cqC0cnzXjHI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/cqC0cnzXjHI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/cqC0cnzXjHI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "cqC0cnzXjHI"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "cqC0cnzXjHI",
        "videoPublishedAt": "2021-06-01T18:42:48Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "-VNp1fdBRLR8Hict9vProBsbf3I",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4xMkVGQjNCMUM1N0RFNEUx",
      "snippet": {
        "publishedAt": "2021-06-12T17:23:20Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "Complete KINEMATICS in 1 Shot - All Concepts, Tricks & PYQs Covered | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMP ⌚\n\n0:00 Introduction\n17:39 Class Starts\n20:01 Basic Definitions\n1:01:37 Standard Notations\n1:03:26 Instantaneous Speed/Velocity/Acceleration\n1:41:09 1-D Motion\n2:11:28 Relative Motion\n2:20:10 BREAK 1\n2:34:47 Chor-Police Questions\n2:56:37 Rain Man Problems\n3:18:00 Swimmer- River Problems\n3:47:51 BREAK 2\n4:32:45 Most Important Question\n4:44:04 Velocity of Approach\n5:28:28 Projectile Motion\n7:22:18 Monkey-Bullet Problem\n7:26:50 Shortest Distance Cases\n8:12:10 The End\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Us4B5Rf1qN0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Us4B5Rf1qN0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Us4B5Rf1qN0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Us4B5Rf1qN0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Us4B5Rf1qN0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Us4B5Rf1qN0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "Us4B5Rf1qN0",
        "videoPublishedAt": "2021-06-04T21:19:15Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "YVvllDOJ6njjUP5OEZq_e8kqkLs",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4wMTcyMDhGQUE4NTIzM0Y5",
      "snippet": {
        "publishedAt": "2021-06-08T04:08:44Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "Laws of Motion in 1 Shot - All Concepts, Tricks and PYQs Covered | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS ⌚\n\n0:00 Intro\r\n4:15 Today's Topics\r\n7:16 History of Inertia\r\n10:40 Newton's 1st Law of Motion\r\n12:11 Inertia and Its Types\r\n23:39 Newton's 2nd Law Of Motion\r\n37:00 Questions\r\n42:12 General Form of Newton's 2nd Law\r\n47:49 Questions\r\n1:02:02 Newton's 3rd Law of Motion\r\n1:12:36 Impulse\r\n1:17:42 Questions\r\n1:35:35 BREAK 1\r\n1:50:52 Equilibrium of forces\r\n1:52:20 Tension\r\n1:55:38 Questions Based on Tension\r\n2:03:34 Massive Ropes\r\n2:07:31 Questions \r\n2:18:15 Normal Reaction\r\n2:26:51 Questions Based on the Normal Reaction\r\n2:50:13 Spring Force\r\n2:55:05 Questions\r\n3:02:22 Questions Involving the Cutting kf String/Spring\r\n3:11:38 BREAK 2\r\n3:30:32 Storytime\r\n3:38:25 Pulley\r\n3:40:32 Questions\r\n3:48:16 Atwood Machine\r\n3:57:54 Questions\r\n4:00:02 Constrained Motion\r\n4:08:49 Questions\r\n4:39:52 Wedge Constraint\r\n4:45:03 Questions\r\n5:00:54 PYQs\r\n5:22:38 Thank you\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/P5_DKoajUT4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/P5_DKoajUT4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/P5_DKoajUT4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/P5_DKoajUT4/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "P5_DKoajUT4"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "P5_DKoajUT4",
        "videoPublishedAt": "2021-06-08T16:25:09Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "OEU4GnpL07o7w8SxnEZnqDK7jMw",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC41MjE1MkI0OTQ2QzJGNzNG",
      "snippet": {
        "publishedAt": "2021-06-12T17:22:30Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "FRICTION in 1 Shot - All Concepts, Tricks & PYQs | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\nTIMESTAMPS ⌚\n\n0:00  Introduction\n2:27  Lecture Goals🥅\n3:22  Friction Start\n3:50  Myth of Friction\n6:03  Sach ka Samana\n15:41  Why Friction\n27:43  Types of Friction\n39:07  Static Friction\n48:38  Kinetic Friction\n1:02:46  Direction of Kinetic Friction\n1:11:34  Direction of Static Friction\n1:18:51  Challenger Question\n1:25:05  Summary Till now\n1:27:31  Questions Practice\n1:56:05  BREAK \n2:12:29  Question Contd.\n2:20:11  Angle of Friction\n2:25:55  Angle of Repose\n2:32:39  Questions Practice\n2:56:38  Two Block System\n3:10:57  Questions Practice\n3:52:58  Pseudo Force\n3:58:32  Frames of Reference\n4:03:51  Effective Gravity\n4:06:48  Questions Practice\n4:23:15  Thank you\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RtHMBbRB_Gc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RtHMBbRB_Gc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RtHMBbRB_Gc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/RtHMBbRB_Gc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/RtHMBbRB_Gc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "RtHMBbRB_Gc"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "RtHMBbRB_Gc",
        "videoPublishedAt": "2021-06-11T15:45:18Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "RO4ZXIF_s-lpew_m0C1Jq765cOs",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4wOTA3OTZBNzVEMTUzOTMy",
      "snippet": {
        "publishedAt": "2021-06-12T17:22:38Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "Circular Motion in 1 Shot - All Concepts, Tricks & PYQs Covered | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS ⌚\n\n0:00 Introduction\n3:38 Angular Variables\n12:46 Question Related to Angular   \n            Variables\n19:19 Acceleration\n32:34 Relation b/w Linear & Angular\n           Variables\n43:20 Equation of Motion Along Circle\n45:46 Questions\n1:09:07 Circular Dynamics\n1:19:42 Questions (including Conical\n               Pendulum)\n1:44:16 Unbanked Roads \n1:48:19 Banked Road \n1:58:25 Thank You ❤️❤️\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_vnzkmk1QYM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_vnzkmk1QYM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_vnzkmk1QYM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/_vnzkmk1QYM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/_vnzkmk1QYM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 5,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "_vnzkmk1QYM"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "_vnzkmk1QYM",
        "videoPublishedAt": "2021-06-11T17:37:21Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "oKTZaniJwUjCW_Ee7ZY5rtIh6a4",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC41MzJCQjBCNDIyRkJDN0VD",
      "snippet": {
        "publishedAt": "2021-06-15T09:58:47Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "Work, Energy and Power in 1 Shot (Part 1) - All Concepts, Tricks | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\nTIMESTAMP ⌚\n\n0:00 Introduction\r\n4:32 Work\r\n32:23 Work Done by Constant Force\r\n36:59 Work Done by Multiple Constant Force\r\n39:18 Work Done by Variable Force\r\n59:48 Work Done From Graph\r\n1:20:13 Work Done by Gas\r\n1:28:23 BREAK 1\r\n1:59:38 Work Done by Gravity\r\n2:12:35 Work Done by Friction\r\n2:20:47 Work Done by Spring\r\n2:41:00 Work Done by Pseudo force\r\n3:00:53 BREAK 2\r\n3:24:00 Kinetic Energy\r\n3:43:46 Work-Energy Theorem\r\n4:46:38 BREAK 3\r\n5:03:34 Potential Energy\r\n5:17:52 Relation Between Force and Potential Energy\r\n5:27:01 Equilibrium Concept\r\n5:49:17 Thank you ❤️\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/C7CXnkkOmX8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/C7CXnkkOmX8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/C7CXnkkOmX8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/C7CXnkkOmX8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/C7CXnkkOmX8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 6,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "C7CXnkkOmX8"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "C7CXnkkOmX8",
        "videoPublishedAt": "2021-06-15T18:42:35Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "srDgMkkThBKqMbN3a_gXrY10SUw",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5DQUNERDQ2NkIzRUQxNTY1",
      "snippet": {
        "publishedAt": "2021-06-17T07:40:08Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "Work, Energy and Power in 1 Shot (Part 2) - All Concepts, Tricks | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nTIMESTAMPS ⌚\n\n0:00 Introduction\n5:50 Concept of Stopping Distance and Stopping Time\n13:06 Questions \n1:02:46 Potential Energy Due to Gravity and Spring \n1:18:53 Relation Between Force and Potential Energy \n1:26:16 Concept of Equilibrium \n1:33:00 BREAK 1\n1:52:30 Questions on Equilibrium \n2:40:10 Hypothetical Questions\n2:45:30 Mechanical Energy Conservation \n2:51:55 Vertical Circular Motion \n3:23:55 BREAK 2\n3:51:37 Questions\n4:19:45 Power \n4:40:00 Questions\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UGroErIrdJ4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UGroErIrdJ4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UGroErIrdJ4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/UGroErIrdJ4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/UGroErIrdJ4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 7,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "UGroErIrdJ4"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "UGroErIrdJ4",
        "videoPublishedAt": "2021-06-18T18:43:54Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "Ykt_vFVICJdjTqjft4nCXuBG2AE",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC45NDk1REZENzhEMzU5MDQz",
      "snippet": {
        "publishedAt": "2021-06-22T05:51:57Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "CENTER OF MASS in 1 Shot - All Concepts, Tricks & PYQs | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS ⌚\n\n0:00 Introduction\n9:58 What is the Centre of Mass?\n12:25 Basics Needed for Com\n14:48 Derviation of COM Formula\n35:51 Some Important Points\n39:20 Animation \n44:20 Questions\n1:14:51 Where is COM?\n1:22:59 Questions \n1:26:30 How to Find Com Summary\n1:28:09 Questions\n1:50:20 BREAK 1\n2:02:22 Continuing Questions\n2:34:22 Com in Following Cases\n2:58:53 Questions \n3:15:08 COM of Reduced Mass\n3:24:22 Questions\n3:45:26 BREAK 2\n4:07:31 Boat Problems\n4:26:52 Questions\n5:22:31 Conservation of Linear Momentum\n5:30:29 Questions\n5:47:40 BREAK 3\n6:01:30 Continuing Questions\n6:10:15 Collisions \n6:55:41 Questions\n8:00:00 BREAK 4\n8:10:00 Questions\n8:43:29 Obilique Collisions \n10:00:16 COM Frame\n10:01:24 Amazing Question\n10:03:17 Thank You\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/xk2MaMMQeKs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/xk2MaMMQeKs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/xk2MaMMQeKs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/xk2MaMMQeKs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/xk2MaMMQeKs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 8,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "xk2MaMMQeKs"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "xk2MaMMQeKs",
        "videoPublishedAt": "2021-06-22T22:15:09Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "QbGgEvH_TiRuGrSI7z-YRrti3Nw",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5GNjNDRDREMDQxOThCMDQ2",
      "snippet": {
        "publishedAt": "2021-06-26T10:52:00Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ROTATIONAL MOTION in 1 Shot (Part 1) - All Concepts, Tricks & PYQs | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMP ⌚\n\n0:00 INTRODUCTION\n15:22 LECTURE STARTS\n16:27 RIGID BODY+TRANSLATIONAL MOTION\n20:29 PURE ROTATIONAL MOTION\n49:40 ROLLING MOTION\n59:15 MOTION OF RIGID BODY\n1:16:20 MOI\n1:54:30 MOI OF CONTINUOUS BODY\n2:04:48 RADIUS OF GYRATION \n2:13:08 MOI OF ROD\n2:15:11 MOI OF RING\n2:22:08 MOI OF DISC\n2:25:21 QUESTIONS\n2:47:20 BREAK 1\n3:02:08 QUESTIONS\n3:22:56 PARALLEL AXIS AND PERPENDICULAR AXIS THEOREM\n3:41:16 QUESTIONS\n4:07:41 MOI OF HOLLOW AND SOLID CYLINDER\n4:11:09 MOI OF RECTANGULAR PLATE\n4:16:02 QUESTIONS\n4:21:40  MOI OF SOLID AND HOLLOW SPHERE\n4:26:06 QUESTIONS\n4:45:21 MOI OF CUBE\n4:54:10 MOI OF SQUARE LAMINA\n4:55:40 MOI OF RECTANGULAR LAMINA\n4:58:03 QUESTIONS\n5:05:25 TORQUE\n5:25:04 BREAK 2\n5:44:54 QUESTIONS\n6:03:20 TOPPLING\n7:19:39 THANK YOU\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/N5B5y4b0myI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/N5B5y4b0myI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/N5B5y4b0myI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/N5B5y4b0myI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/N5B5y4b0myI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 9,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "N5B5y4b0myI"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "N5B5y4b0myI",
        "videoPublishedAt": "2021-06-25T20:20:43Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "4xrw59kjoPJ2CmNaiUqoxJKR_lc",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC40NzZCMERDMjVEN0RFRThB",
      "snippet": {
        "publishedAt": "2021-06-29T06:03:43Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ROTATIONAL MOTION in One Shot (Part 2) - All Concepts, Tricks & PYQs | Class 11 | JEE Main & Advance",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n\n#rotationalmotion #oneshotlive #manzilsprint #jeewallah #FREEonYouTube",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/rrUJ8e0Xfh0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/rrUJ8e0Xfh0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/rrUJ8e0Xfh0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/rrUJ8e0Xfh0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/rrUJ8e0Xfh0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 10,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "rrUJ8e0Xfh0"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "rrUJ8e0Xfh0",
        "videoPublishedAt": "2021-06-29T19:01:32Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "oxrfCUmZMZC9kDsJONsY-Dh8DuU",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4zMDg5MkQ5MEVDMEM1NTg2",
      "snippet": {
        "publishedAt": "2021-07-01T16:58:11Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ELASTICITY in One Shot - All Concepts, Tricks & PYQs | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMP ⌚\n\n00:00:00 - Introduction\n00:05:17 - Today's Goal\n00:06:30 - Introduction to Elasticity\n00:13:46 - Stress and Strain \n00:21:41 - Longitudinal Stress and Strain\n00:27:22 - Hooke's Law\n00:31:24 - Young's Modulus of Elasticity\n00:41:34 - Questions on above topic\n02:10:19 - BREAK 1\n02:27:23 - Questions on above topic\n02:44:14 - Rod as a Spring\n02:50:36 - Potential Energy stored in Rod\n03:03:14 - Questions on above topic\n03:39:58 - Shear Stress and Strain\n03:46:16 - Modulus of Rigidity\n03:50:03 - Questions on above topic\n04:29:23 - BREAK 2\n04:44:38 - Volumetric Stress and Strain\n04:51:57 - Bulk Modulus of Elasticity\n04:56:49 - Questions on above topic\n05:11:03 - Heating Effect of Rod\n05:21:30 - Thermal Stress and Strain\n05:23:13 - Questions on above topic\n05:39:14 - Stress - Strain Curve\n05:45:25 - Questions on above topic\n06:07:22 - Thank you!!\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/JmIFDPiWMQg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/JmIFDPiWMQg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/JmIFDPiWMQg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/JmIFDPiWMQg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/JmIFDPiWMQg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 11,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "JmIFDPiWMQg"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "JmIFDPiWMQg",
        "videoPublishedAt": "2021-07-02T18:00:22Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "vHzzGl6SNXD0aB2jQ5y1VUsk0e4",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC41Mzk2QTAxMTkzNDk4MDhF",
      "snippet": {
        "publishedAt": "2021-07-08T02:02:29Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "FLUID MECHANICS in One Shot - Full Chapter Revision (Part 1) | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nTIME STAMPS - \n\n00:00 INTRODUCTION\n4:06 MECHANICAL PROPERTIES OF FLUID  \n4:15 INTRODUCTION\n6:40 PRESSURE\n12:18 DENSITY\n23:45 PRESSURE VARIATION\n26:30 PRESSURE WITH DEPTH\n31:20 HORIZONTAL PLANE\n35:12 QUESTION 1\n51:36 PRESSURE ON WALL\n1:02:49 QUESTION 2\n1:28:48 QUESTION 3\n1:37:56 ARCHIMEDES PRINCIPLE\n1:38:38 BUOYANT FORCE\n1:42:53 QUESTION 4\n1:47:20 OPEN TUBE MANOMETRE\n1:48:33 GAUGE PRESSSURE\n1:48:50 QUESTION 5\n1:51:39 QUESTION 6\n1:52:39 PASCAL'S LAW \n1:54:14 HYDRAULIC  MACHINE\n1:54:46 Thank You\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#fluidmechanics #oneshot #jeewallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8fmAODpXMeE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8fmAODpXMeE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8fmAODpXMeE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/8fmAODpXMeE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/8fmAODpXMeE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 12,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "8fmAODpXMeE"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "8fmAODpXMeE",
        "videoPublishedAt": "2021-07-08T05:34:21Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "FO-VEB-1T_ihAKnc7GyZvKM0_tE",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5EQUE1NTFDRjcwMDg0NEMz",
      "snippet": {
        "publishedAt": "2021-07-08T21:32:46Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "Fluid Mechanics in One Shot - Full Chapter Revision (Part 2) - Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS -\n0:00 INTRODUCTION\n3:00 CONTINUITY\n11:22 BERNOULLI'S PRINCIPLE\n20:38 QUESTIONS(PYQ'S ALSO)\n48:20 TORRICELLI'S LAW\n1:15:21 VISCOSITY\n1:21:22 STOKE'S FORMULA\n1:29:00 QUESTIONS(PYQ'S ALSO)\n1:32:42 POISEUILLE'S EQUATION\n1:38:58 REYNOLD'S NUMBER\n1:41:56  SURFACE TENSION\n1:43:23 SURFACE ENERGY\n1:46:55 DROP\n1:47:45 BUBBLE \n1:48:31 QUESTIONS(PYQ'S)\n2:00:18 HOMEWORK 2 QUESTIONS\n2:00:27 THANK YOU\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#fluidmechanics #oneshot #manzilsprint",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/R--fcJ5nafA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/R--fcJ5nafA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/R--fcJ5nafA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/R--fcJ5nafA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/R--fcJ5nafA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 13,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "R--fcJ5nafA"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "R--fcJ5nafA",
        "videoPublishedAt": "2021-07-09T05:40:07Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "HVbLyvloltsH3N8bHXcXdkXK9jA",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4yMUQyQTQzMjRDNzMyQTMy",
      "snippet": {
        "publishedAt": "2021-07-10T02:42:14Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THERMAL PROPERTIES OF MATTER in One Shot (Part 1) - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\nTIME STAMPS -\n\n0:00 HELLO STUDENTS\n4:21 TOPICS TO BE COVERED\n4:47 THERMAL EXPANSION\n8:35 WHEN TEMPERATURE IS INCREASED\n9:14 COEFFICIENT OF LINEAR EXPANSION\n13:31 COEFFICIENT OF AREAL EXPANSION\n15:38 COEFFICIENT OF VOLUMETRIC EXPANSION\n18:18 QUESTION\n21:06 JAI SHREE RAM RULE\n22:23 QUESTION\n42:33 CALORIMETRY\n47:38 LATENT HEATS\n51:15 SOME STANDARD VALUES\n52:26 QUESTIONS\n57:09 HOW TO CONVERT DEGREE, CELCIUS, KELVIN TO FAHRENHEIT \n59:59 WATER EQUIVALENT\n1:03:38 QUESTIONS\n1:10:01 BANTI BABLI METHOD\n1:28:50 CONDUCTION\n1:31:01 WHAT IS STEADY STATE\n1:34:18 OHM'S LAW OF HEAT CONDUCTION\n1:36:02 THANK YOU\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#thermalpropertiesofmatter #oneshot #manzilsprint #jeewallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ccd6QDHVcCo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ccd6QDHVcCo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ccd6QDHVcCo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/ccd6QDHVcCo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/ccd6QDHVcCo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 14,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "ccd6QDHVcCo"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "ccd6QDHVcCo",
        "videoPublishedAt": "2021-07-10T07:43:34Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "Txs6D0IKjqmMG4BCA3BPZf2rfCE",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC41QTY1Q0UxMTVCODczNThE",
      "snippet": {
        "publishedAt": "2021-07-10T02:24:51Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "THERMAL PROPERTIES OF MATTER in One Shot (Part 2) - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS - \n0:00 INTRODUCTION\n2:31 STEADY STATE\n3:27 QUESTIONS\n12:07 OHM'S LAW OF HEAT CONDUCTION\n19:17 VARIATION OF TEMPERATURE IN A STRAIGHT ROD\n25:57 SERIES PARALLEL CONCEPTS\n26:42 QUESTIONS\n41:47 FORMATION OF ICE DUE TO CONDUCTION\n52:27 QUESTIONS\n55:44 CONVECTION\n58:37 RADIATION\n59:40 QUESTIONS\n1:00:31 IS THERE A RADIATION COMING FROM BREAD? \n1:01:54 PREVOST THEORY OF RADIATION\n1:04:02 WHEN TEMPERATURE OF BODY INCREASES PRE DECREASES? \n1:06:15 GOOD EMITTERS ARE GOOD OR BAD ABSORBERS? \n1:10:43 WHAT IS BLACK BODY? \n1:13:29 ABSORBTIVITY \n1:14:48 STEPHAN- BOLTZMANN LAW\n1:20:42 EMMISIVITY\n1:22:42 QUESTIONS\n1:29:57 WEIN'S DISPLACEMENT LAW\n1:33:34 QUESTIONS\n1:36:13 NEWTON'S LAWS OF COOLING \n1:40:14 QUESTIONS \n1:45:22 THANKS बच्चों YOU ARE AMAZING\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#KTG #thermodynamics #manzilsprint #one shot #jeewallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ql9SXXGNCWI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ql9SXXGNCWI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ql9SXXGNCWI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/ql9SXXGNCWI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/ql9SXXGNCWI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 15,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "ql9SXXGNCWI"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "ql9SXXGNCWI",
        "videoPublishedAt": "2021-07-10T14:09:04Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "Z3yd2rpyxf7Nfsy29oKvxdUMRN4",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC45RTgxNDRBMzUwRjQ0MDhC",
      "snippet": {
        "publishedAt": "2021-07-10T16:11:02Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "SIMPLE HARMONIC MOTION in One Shot - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n📑 TOPICS COVERED IN THIS LECTURE -\nConcept of oxidation and reduction\nRedox reactions\nOxidation number\nBalancing redox reactions, in terms of loss and gain of electrons and change in oxidation number\nApplications of redox reactions\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n\n#SHM #Class11 #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UI3X4FusCCo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UI3X4FusCCo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UI3X4FusCCo/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/UI3X4FusCCo/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/UI3X4FusCCo/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 16,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "UI3X4FusCCo"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "UI3X4FusCCo",
        "videoPublishedAt": "2021-07-11T05:17:43Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "iL0M1ifWNRGAOd5tpIZlSX8zLmg",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5ENDU4Q0M4RDExNzM1Mjcy",
      "snippet": {
        "publishedAt": "2021-07-11T02:00:33Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "WAVES & SOUNDS in One Shot - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS - \n0:00 INTRODUCTION\n0:40 WAVES\n1:46 CLASSIFICATION OF WAVES\n4:46 TRAVELING WAVES(MATHEMATICAL EXPRESSION)\n9:08 QUESTIONS \n12:26 PLANE PROGRESSIVE HARMONIC WAVE\n15:16 QUESTIONS\n22:03 PHASE DIFFERENCE WITH X AND T\n24:32 PARTICLE VELOCITY, SLOPE, WAVE SPEED AND PARTICLE ACCELERATION \n29:24 SPEED OF TRANSVERSE WAVE ON A STRING\n30:52 QUESTION\n43:08 INTENSITY OF WAVE\n45:37 SOUND WAVE\n52:35 PRESSURE WAVE & DENSITY WAVE\n1:03:44 INTENSITY OF A SOUND WAVE\n1:04:46 LOUDNESS OF A SOUND\n1:05:52 STANDING WAVES\n1:11:23 MODE OF VIBRATION\n1:15:19 ONE SIDE FREE\n1:19:39 ORGAN PIPE\n1:21:41 QUESTIONS\n1:25:44 RESONANCE TUBE EXPERIMENT\n1:28:04 QUESTIONS\n1:35:49 INTERFERENCE\n1:37:51 QUESTIONS\n1:39:59 BEATS\n1:40:26 DOPPLER'S EFFECT\n1:46:06 QUESTIONS\n1:49:49 THANK YOU\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n\n#wavesandsounds #oneshotlive #manzilsprint #jeewallah #FREEonYouTube",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Mp4SrAn2ygs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Mp4SrAn2ygs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Mp4SrAn2ygs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Mp4SrAn2ygs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Mp4SrAn2ygs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 17,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Mp4SrAn2ygs"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "Mp4SrAn2ygs",
        "videoPublishedAt": "2021-07-11T10:16:10Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "EleXIXFIazQSCWAvNkmQnIFKL28",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4yMDhBMkNBNjRDMjQxQTg1",
      "snippet": {
        "publishedAt": "2021-07-12T02:35:00Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ELECTRIC CHARGES AND FIELDS in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nTIMESTAMPS - \n00:00:00 Introduction\n00:03:18 Coulomb's Law\n00:15:45 Superposition Principle\n00:22:22 Charge Distribution\n00:24:56 Electric field due to point charge\n00:26:22 E.F due to finite line charge\n00:35:14 E.F due to Circular arc\n00:47:25 E.F due to the axis of a Ring\n00:57:07 Motion of a charged particle in uniform E.F\n01:07:11 PYQ's 1\n01:20:00 Lines of Force\n01:22:54 Properties of Electric lines or Force\n01:27:09 Graph\n01:36:35 Electric field due to dipole\n01:48:15 PYQ's II\n01:53:00 Gauss's Law\n01:58:53 PYQ's III\n02:04:00 PYQ's IV\n02:05:50 Thank You\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n\n#electriccharges #electricfields #manzilsprint #oneshotlive #jewallah #FREEonYouTube",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fOVS_PI4thY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fOVS_PI4thY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fOVS_PI4thY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/fOVS_PI4thY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/fOVS_PI4thY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 18,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "fOVS_PI4thY"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "fOVS_PI4thY",
        "videoPublishedAt": "2021-07-12T10:20:01Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "JhwJNzouzhrsvv-pmAielEVu0yg",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5GM0Q3M0MzMzY5NTJFNTdE",
      "snippet": {
        "publishedAt": "2021-07-12T10:49:06Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ELECTRIC POTENTIAL & CAPACITANCE in One Shot - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App(http://bit.ly/3ru9Agh).\n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#ElectricPotentialandCapacitance #Class12 #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4pDDrJTrCHg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4pDDrJTrCHg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4pDDrJTrCHg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/4pDDrJTrCHg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/4pDDrJTrCHg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 19,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "4pDDrJTrCHg"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "4pDDrJTrCHg",
        "videoPublishedAt": "2021-07-12T13:00:13Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "I00GyvqNVHM8FjYUqo9eOhc7vRU",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4zRjM0MkVCRTg0MkYyQTM0",
      "snippet": {
        "publishedAt": "2021-07-13T02:36:32Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "CURRENT ELECTRICITY in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n\n#currentelectricity #oneshotlive #manzilsprint #jeewallah #FREEonYouTube",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/g3rG5gPeq2A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/g3rG5gPeq2A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/g3rG5gPeq2A/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/g3rG5gPeq2A/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/g3rG5gPeq2A/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 20,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "g3rG5gPeq2A"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "g3rG5gPeq2A",
        "videoPublishedAt": "2021-07-13T12:47:07Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "iE0csjdcfzJqvFZstXuktvZ1gyg",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC45NzUwQkI1M0UxNThBMkU0",
      "snippet": {
        "publishedAt": "2021-07-13T02:38:57Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "MAGNETIC FIELD in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#magneticfield #oneshotlive #manzilsprint #jeewallah #FREEonYouTube",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vDJS8YIeOjs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vDJS8YIeOjs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vDJS8YIeOjs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/vDJS8YIeOjs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/vDJS8YIeOjs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 21,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "vDJS8YIeOjs"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "vDJS8YIeOjs",
        "videoPublishedAt": "2021-07-13T09:55:59Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "aEUDBAk9-hD1l8dyGXUJT5v2Rno",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5DNzE1RjZEMUZCMjA0RDBB",
      "snippet": {
        "publishedAt": "2021-07-14T01:44:04Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ELECTROMAGNETIC INDUCTION in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS - \n0:00 Introduction\n1:58 Magnetic Flux\n6:26 Magnetic Flux through Square Loop\n11:56 Faradays Law\n14:02 Lenz's Law\n19:40 Questions\n30:33 PYQs\n45:05 Charge Flown\n46:46 Question\n1:00:53 Motional EMF\n1:04:29 Induced EMF in Random Conductor\n1:09:03 Motional EMF under external force\n1:10:25 PYQ\n1:15:31 Induced EMF across the ends of a rotating rod in Magnetic field\n1:17:10 PYQ\n1:19:46 Non-Conservative Electric Field\n1:24:36 Self Inductance\n1:29:29 PYQ\n1:31:06 Self Inductance of Solenoid\n1:33:32 Question\n1:35:50 Series Parallel Circuits of Inductors\n1:37:29 PYQ\n1:38:35 Energy in an Inductor\n1:40:33 LR Circuit (Increasing Current)\n1:44:42 Decreasing Current\n1:46:13 Imp. Points\n1:49:00 PYQs\n1:55:29 Mutual Inductance\n1:58:48 PYQs\n1:59:49 LC Oscillations\n2:04:53 PYQs\n2:06:59 Thank You\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#EMI #OneShotLive #ManzilSprint #JEEWallah #FREEonYouTube",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/u-OmXRe0CuU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/u-OmXRe0CuU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/u-OmXRe0CuU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/u-OmXRe0CuU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/u-OmXRe0CuU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 22,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "u-OmXRe0CuU"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "u-OmXRe0CuU",
        "videoPublishedAt": "2021-07-14T15:18:11Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "vLFTF30JOrrCgNV3HaxrssmkdG8",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC43MTI1NDIwOTMwQjIxMzNG",
      "snippet": {
        "publishedAt": "2021-07-14T01:55:47Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "MAGNETISM in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nTIMESTAMPS - \n0:00 Introduction\n00:26 Importance of Chapter\n01:15 Lecture Start\n01:36 Bar Magnet\n04:08 Magnetic Dipole\n07:53 Magnetic Field due to Bar Magnet\n12:14 Magnetic Field Lines\n15:16 Gauss Law for Magnetostatics\n18:32 Forces On Hypothetical Magnetic Charge\n21:23 Bar Magnet's Interaction with Uniform Magnetic Field\n27:53 Work done on dipole\n28:51 Questions\n33:20 Earths Magnetism\n37:21 Elements of Earths Magnetism\n38:19 Magnetic and Geographic meridian\n40:16 True Angle Of dip\n44:33 Apparent Angle of Dip\n48:32 Questions.\n1:01:05 Magnetization and Magnetic Intensity\n1:06:45 Magnetic Susceptibility\n1:08:26 Permeability and Realtive Permeability\n1:10:30 Rel. b/w permeability and susceptibility\n1:12:07 Magnetic Materials\n1:12:26 Diamagnetic Material\n1:16:54 Explanation of Diamagnetism\n1:22:20 Question\n1:24:31 Paramagnetic Substances\n1:26:18 Curies Law\n1:27:40 Explanation of Paramagnetism\n1:30:42 Question\n1:32:53 Ferromagnetic Substances\n1:34:51 Curie-Weiss Law\n1:35:37 Explanation of Ferromagnetism\n1:39:25 Questions\n1:45:27 Hysteresis\n1:48:39 Question\n1:50:01 Theory (Given In Notes)\n1:50:57 Thank You\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Magnetism #OneShotLive #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9sUxI_QjyT8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9sUxI_QjyT8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9sUxI_QjyT8/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/9sUxI_QjyT8/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/9sUxI_QjyT8/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 23,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "9sUxI_QjyT8"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "9sUxI_QjyT8",
        "videoPublishedAt": "2021-07-14T07:51:10Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "NzKXnF6s9YOnTbpuviJ8RwIJzoU",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5DQ0MyQ0Y4Mzg0M0VGOEYw",
      "snippet": {
        "publishedAt": "2021-07-14T18:47:29Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "RAY OPTICS in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#RayOptics #OneShot #Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vy8JuPrDEbc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vy8JuPrDEbc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vy8JuPrDEbc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/vy8JuPrDEbc/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/vy8JuPrDEbc/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 24,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "vy8JuPrDEbc"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "vy8JuPrDEbc",
        "videoPublishedAt": "2021-07-15T17:40:45Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "9bmy9U_PFpIuPIjcOCOFob5Dvto",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4yQUE2Q0JEMTk4NTM3RTZC",
      "snippet": {
        "publishedAt": "2021-07-15T02:13:28Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ELECTROMAGNETIC WAVES in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#ElectromagneticWaves #OneShotLive #Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/KixA92Ak-ds/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/KixA92Ak-ds/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/KixA92Ak-ds/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/KixA92Ak-ds/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/KixA92Ak-ds/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 25,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "KixA92Ak-ds"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "KixA92Ak-ds",
        "videoPublishedAt": "2021-07-15T07:58:09Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "eWXJyJUlogGABXmemTJcuZyRhNw",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5DMkU4NTY1QUFGQTYwMDE3",
      "snippet": {
        "publishedAt": "2021-07-15T02:16:48Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "ALTERNATING CURRENT in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nTIMESTAMPS - \n0:00 Introduction\n9:00 Average value of AC\n11:47 RMS value\n14:57 Questions\n18:33 phasor diagram\n22:42 Resistance + AC circuit\n24:40 swimming 😂😂\n24:57 capacitor + AC circuit\n29:40 Inductor + AC\n31:52 LR circuit\n39:18 choke coil \n41:06 RC AC circuit\n44:35 LCR AC circuit\n49:25 Quality factor in resonance\n55:09 Questions\n1:02:50 Power in AC\n1:04:20 Questions\n1:08:05 transformer\n1:13:38 Questions\n1:15:52 loss in transformer\n1:17:54 Thank You\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#AlternatingCurrent #OneShotLive #Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/-F6Nrc3vWGw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/-F6Nrc3vWGw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/-F6Nrc3vWGw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/-F6Nrc3vWGw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/-F6Nrc3vWGw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 26,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "-F6Nrc3vWGw"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "-F6Nrc3vWGw",
        "videoPublishedAt": "2021-07-15T07:11:04Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "7NkAhzwIhWH6yxjsurYWTKsd2CE",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC44Mjc5REFBRUE2MTdFRDU0",
      "snippet": {
        "publishedAt": "2021-07-16T02:32:56Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "WAVE OPTICS in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App(http://bit.ly/3ru9Agh)\n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n#WaveOptics #OneShotLive #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/NbhTeZJugiw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/NbhTeZJugiw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/NbhTeZJugiw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/NbhTeZJugiw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/NbhTeZJugiw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 27,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "NbhTeZJugiw"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "NbhTeZJugiw",
        "videoPublishedAt": "2021-07-16T07:45:08Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "vrt11WHNNotYdCG8A0ahpveMNmo",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC43NDhFRTgwOTRERTU4Rjg3",
      "snippet": {
        "publishedAt": "2021-07-17T02:17:52Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "GRAVITATION in One Shot - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#Gravitation #OneShotLive #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ezj7WyodDmQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ezj7WyodDmQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ezj7WyodDmQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/ezj7WyodDmQ/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/ezj7WyodDmQ/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 28,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "ezj7WyodDmQ"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "ezj7WyodDmQ",
        "videoPublishedAt": "2021-07-17T07:52:13Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "ikOtvLFli8kRutPQbmvUVnbo4SE",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC41QUZGQTY5OTE4QTREQUU4",
      "snippet": {
        "publishedAt": "2021-07-17T02:30:59Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "MODERN PHYSICS in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n#ModernPhysics #OneShotLive #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/oKE6cwcl7ss/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/oKE6cwcl7ss/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/oKE6cwcl7ss/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/oKE6cwcl7ss/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/oKE6cwcl7ss/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 29,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "oKE6cwcl7ss"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "oKE6cwcl7ss",
        "videoPublishedAt": "2021-07-17T20:23:57Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "UIeo3cwKKPPuoRE72Xj25MZltrM",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC4zRDBDOEZDOUM0MDY5NEEz",
      "snippet": {
        "publishedAt": "2021-07-18T01:55:40Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "KTG & Thermodynaimcs in One Shot - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\n📝 TOPICS COVERED IN THIS LECTURE - \n1 Introduction to KTG\n2 Molecular nature of matter\n3 Behaviour of gases\n4 Kinetic theory of an ideal gas\n5 Law of equipartition of energy\n6 Specific heat capacity\n7 Mean free path\n8 Introduction to Thermodynamics\n9 Thermal equilibrium\n10 Zeroth law of thermodynamics\n11 Heat, internal energy and work\n12 First law of thermodynamics\n13 Specific heat capacity\n14 Thermodynamic state variables and equation of state\n15 Thermodynamic processes\n16 Heat engines\n17 Refrigerators and heat pumps\n18 Second law of thermodynamics\n19 Reversible and irreversible processes\n20 Carnot engine\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n\n#KTG #Thermodynamics #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PY0A9JshVdk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PY0A9JshVdk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PY0A9JshVdk/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/PY0A9JshVdk/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/PY0A9JshVdk/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 30,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "PY0A9JshVdk"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "PY0A9JshVdk",
        "videoPublishedAt": "2021-07-18T11:09:49Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "JLypNFnaW3hBuy_t__R-H0eeUSM",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC5CMEQ2Mjk5NTc3NDZFRUNB",
      "snippet": {
        "publishedAt": "2021-07-19T02:36:28Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "SEMICONDUCTORS in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n📑 TOPICS COVERED IN THIS LECTURE -\n1 Introduction to semiconductors\n2 Classification of Metals, Conductors, and Semiconductors\n3 Intrinsic Semiconductor\n4 Extrinsic Semiconductor\n5 p-n Junction\n6 Semiconductor Diode\n7 Application of Junction Diode as a Rectifier\n8 Special Purpose p-n Junction Diodes\n9 Junction Transistor\n10 Digital Electronics and Logic Gates\n11 Integrated Circuits\n\n\nTIMESTAMPS - \n0:00 Introduction\n9:00 band theory\n20:38 intrinsic semiconductor\n38:09 p type \n49:06 n type \n54:12 pn junction \n1:03:54 biasing \n1:33:09  rectifier\n2:01:48 led\n2:12:06 transistor \n2:33:18 transfer characteristic\n2:52:46 alpha beta voltage gain \n3:07:05 Thank You\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact\n\n#Semiconductors #OneShotLive #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CgWDUjYa940/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CgWDUjYa940/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CgWDUjYa940/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/CgWDUjYa940/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/CgWDUjYa940/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 31,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "CgWDUjYa940"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "CgWDUjYa940",
        "videoPublishedAt": "2021-07-19T15:50:50Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "WiJHyF9vvqAoknBrrXfAQNNPNwY",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC42MTI4Njc2QjM1RjU1MjlG",
      "snippet": {
        "publishedAt": "2021-07-19T02:41:15Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "COMMUNICATION SYSTEM in One Shot - Full Chapter Revision | Class 12 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n📑 TOPICS COVERED IN THIS LECTURE -\n1 Introduction to Communication Systems\n2 Elements of Communication System\n3 Basic Terminology Used in Electronic Communication Systems\n4 Bandwidth of Signals\n5 Bandwidth of Transmission Medium\n6 Propagation of Electromagnetic Waves\n7 Modulation and its Necessity\n8 Amplitude Modulation\n9 Production of Amplitude Modulated Wave\n10 Detection of Amplitude Modulated Wave\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact\n\n#CommunicationSystem #OneShotLive #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UB5NTmBOPZA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UB5NTmBOPZA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UB5NTmBOPZA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/UB5NTmBOPZA/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/UB5NTmBOPZA/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 32,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "UB5NTmBOPZA"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "UB5NTmBOPZA",
        "videoPublishedAt": "2021-07-19T17:56:50Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "seLB_akvZaAcoKXgOeyDVR32kUo",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC45RjNFMDhGQ0Q2RkFCQTc1",
      "snippet": {
        "publishedAt": "2021-07-19T08:55:14Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "UNITS AND MEASUREMENTS in One Shot - Full Chapter Revision | Class 11 | JEE Main",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#UnitsandMeasurement #Class11 #ManzilSprint #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/J_WcUr5uoEw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/J_WcUr5uoEw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/J_WcUr5uoEw/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/J_WcUr5uoEw/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/J_WcUr5uoEw/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 33,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "J_WcUr5uoEw"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "J_WcUr5uoEw",
        "videoPublishedAt": "2021-07-19T10:15:00Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "2-IEjzWdrLn1G4R1JYpeXpfat80",
      "id": "UEx4eUdhUjNoRXkzajJ6c1U2RHU0THNQZkF5dlhZSEF0SC40QTA3NTU2RkM1QzlCMzYx",
      "snippet": {
        "publishedAt": "2021-08-06T09:19:07Z",
        "channelId": "UCVJU_IChPMOe8RWkdVQjtfQ",
        "title": "FLUIDS in One Shot - All Concepts, Tricks & PYQs Covered | Class 11 | JEE Main & Advanced",
        "description": "▶ To download Lecture Notes, Practice Sheet & Practice Sheet Video Solution, Visit MANZIL Batch in Batch Section of PhysicsWallah App/Website.\n📲PW App Link - https://bit.ly/YTAI_Jee\n🌐PW Website - https://www.pw.live/   \n\n📝 Note: This Batch is Completely FREE, You just have to click on \"BUY NOW\" button for your enrollment.\n\n📎 JEE TEST SERIES ON PhysicsWallah APP (http://bit.ly/3ru9Agh) & https://physicswallah.live\n\n▶Physics Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH\n\n▶Maths Playlist : https://youtube.com/playlist?list=PLxyGaR3hEy3hMp_J9qFG7KYLFOmhkp4-C\n\n▶Organic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3i8oqjOMz9VHCAmA4s4xofE\n\n▶Inorganic Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3j2W2MD1owL7GU_-fjS7lTI\n\n▶Physical Chemistry : https://youtube.com/playlist?list=PLxyGaR3hEy3gmAAC3q7jH4W6QMrBsmyzk\n\n\n📑 TOPICS COVERED IN THIS LECTURE -\nIntroduction to fluid mechanics\nPressure\nStreamline flow\nBernoulli’s principle\nViscosity\nReynolds number\nSurface tension\n\n\nFor any queries or complaints Visit : \nFor PW APP : https://physicswala.page.link/?type=contact-us&data=open\nFor PW Website : https://www.physicswallah.live/contact-us\n\n#FluidMechanics #OneShotLive #Manzil #JEEWallah",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/mv7lQLWUCjE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/mv7lQLWUCjE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/mv7lQLWUCjE/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/mv7lQLWUCjE/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/mv7lQLWUCjE/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "JEE Wallah",
        "playlistId": "PLxyGaR3hEy3j2zsU6Du4LsPfAyvXYHAtH",
        "position": 34,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "mv7lQLWUCjE"
        },
        "videoOwnerChannelTitle": "JEE Wallah",
        "videoOwnerChannelId": "UCVJU_IChPMOe8RWkdVQjtfQ"
      },
      "contentDetails": {
        "videoId": "mv7lQLWUCjE",
        "videoPublishedAt": "2021-08-06T17:35:07Z"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 38,
    "resultsPerPage": 35
  }
}



export default function Videoslider(props){

  const [vidurl, setVidurl] = useState("");
  // const [viddesc,setViddisc] = useState("St")

    if(props.sub=="maths")
        var data=maths;
    else if(props.sub=="phy")
        var data=phy;
    else
        var data=chem;


    const settings = {
      dots: true,
      arrows:true,  
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll:6 
    };

    console.log(window.location.pathname)

    return (
      <div>
        <center> <ReactPlayer fluid url={vidurl}/></center>

      <br></br>
        <Slider {...settings}>

        {data.items.map(ele=> < Videocard imgPath={ele.snippet.thumbnails.medium.url} title={ele.snippet.title} vidid={ele.contentDetails.videoId} changeurl={setVidurl}/>)}

        </Slider>
      
        <br></br>
        <br></br>
        {/* <p style={{"whiteSpace":"pre-wrap"}}>{viddesc}</p> */}
      </div>
    );
}
