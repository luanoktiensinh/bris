'use client';
import Image from 'next/image';
import { useAppDispatch } from "@/store/hooks";
import styles from './ImageByIntagramItemDetails.module.scss';
import { setShow } from "@/store/features/globalModal/GlobalModalSlide";
import {IImageByIntagramItemDetailsProps} from "./ImageByIntagramItemDetails.type";
import {SocialsSharing} from "../SocialsSharing/SocialsSharing";
import { NextButtonIcon } from '@/icons/next-button';

import { useState, useEffect } from 'react';

export const ImageByIntagramItemDetails = ({index, items} : IImageByIntagramItemDetailsProps) => {
    const dispatch = useAppDispatch();
    const [disabledPrevButton, setDisabledPrevButton] = useState('');
    const [disabledNextButton, setDisabledNextButton] = useState('');
    const [selectedImage, setSelectedImage] = useState(items[index].image_url);
    const [selectedImageDescriptions, setSelectedImageDescriptions] = useState(items[index].descriptions);
    const [selectedImageIndex, setSelectedImageIndex] = useState(index);

    useEffect(() => {
        setSelectedImage(items[selectedImageIndex]?.image_url);
        setSelectedImageDescriptions(items[selectedImageIndex]?.descriptions);
        if(selectedImageIndex <= 0) {
            setDisabledPrevButton('disabled');
        } else {
            setDisabledPrevButton('');
        }
        if(selectedImageIndex >= items.length - 1) {
            setDisabledNextButton('disabled');
        } else {
            setDisabledNextButton('');
        }
    }, [selectedImageIndex, items]);

    const handleSelectedImage = (type: string) => {
        const newIndex = type === "prev" ? selectedImageIndex - 1 : selectedImageIndex + 1;
        if(newIndex >= 0 && newIndex < items.length) {
            setSelectedImageIndex(newIndex);
        }
    };

    return (
        <div className={styles.main}>
            <button className={styles.close} onClick={() => dispatch(setShow(false))}>X</button>
            <div className={styles["modal-container"]}>
                <div className={styles["image-section"]}>
                    <Image
                        src={selectedImage}
                        alt="test"
                        priority={false}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className={styles["detail-section"]}>
                    <div className={styles["detail-nav__bar"]}>
                        <button className={`${styles["detail-nav__button"]} ${styles["detail-prev__button"]}`} onClick={() => handleSelectedImage("prev")} disabled={disabledPrevButton === 'disabled'}>
                            <NextButtonIcon />
                        </button>
                        <button className={`${styles["detail-nav__button"]} ${styles["detail-next__button"]}`} onClick={() => handleSelectedImage("next")} disabled={disabledNextButton === 'disabled'}>
                            <NextButtonIcon />
                        </button>
                    </div>
                    <div className={styles["selected-image__descriptions"]}>
                        <p>{selectedImageDescriptions}</p>
                    </div>
                    <SocialsSharing />
                </div>
            </div>
        </div>
    );
};
