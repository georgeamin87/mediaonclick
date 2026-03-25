'use client'
import React, { useMemo } from 'react';
import PageHeading from "@/app/ui/PageHeading";
import Spacing from "@/app/ui/Spacing";
import MasonryGallery from "@/app/ui/Gallery/MasonryGallery";
import { galleryData } from "./galleryData";

export default function GalleryPage() {
    // Shuffle data randomly
    const shuffledData = useMemo(() => {
        return [...galleryData].sort(() => Math.random() - 0.5);
    }, []);

    const categoryMenu = [
        {
            title: 'All',
            category: 'all',
        }
    ];

    return (
        <>
            <PageHeading
                title="Gallery"
                bgSrc="/images/team_hero_bg.jpeg"
                pageLinkText="Gallery"
            />
            <Spacing lg="145" md="80" />
            <MasonryGallery data={shuffledData} categories={categoryMenu} />
            <Spacing lg="145" md="80" />
        </>
    );
}
