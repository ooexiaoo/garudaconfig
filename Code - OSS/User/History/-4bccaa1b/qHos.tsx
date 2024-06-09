"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_course.json"
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
        <h1>All Courses {courseData.courses.length}</h1>
    </div>
  )
}

export default page