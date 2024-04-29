'use client';

import styles from './Subscribe.module.scss';
import { useSubscribe } from "./useSubscribe";
import { Loading } from '@/components/Loading';
import paymentImg1 from "@/images/payment/bris-brand-1.png";
import paymentImg2 from "@/images/payment/bris-brand-2.png";
import paymentImg3 from "@/images/payment/bris-brand-3.png";
import paymentImg4 from "@/images/payment/bris-brand-4.png";
import paymentImg5 from "@/images/payment/bris-brand-5.png";
import paymentImg6 from "@/images/payment/bris-brand-6.png";
import paymentImg7 from "@/images/payment/bris-brand-7.png";
import paymentImg8 from "@/images/payment/bris-brand-8.png";
import Image from 'next/image';
import Link from 'next/link';

export const Subscribe = () => {
    const { handleSubmit, subscribeError, subscribeSuccess, loading } = useSubscribe();
    
    return (
        <div className={styles.container}>
            <div className="container">
                <p className={styles.title}>SIGN UP AND GET $10 OFF YOUR FIRST ORDER OVER $50*</p>
                {
                    subscribeError.map((error: any, index: number) => (
                        <div key={index} className={styles.errors}>
                            {error.message}
                        </div>
                    ))
                }
                {
                    subscribeSuccess ? <div className={styles.success}>Thank you for subscribing to the Briscoes Club! Please check your inbox shortly</div> : ""
                }
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-3">
                            <div className={styles.formGroup}>
                                <label>First name: <span className={styles.requiredDisplay}>*</span></label>
                                <input className="" type="text" aria-label="First name" name="firstName" aria-required="false" placeholder="First name" aria-invalid="false" />
                                <span className=""></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.formGroup}>
                                <label>Last name: <span className={styles.requiredDisplay}>*</span></label>
                                <input className="" type="text" aria-label="Last name" name="lastName" aria-required="false" placeholder="Last name" aria-invalid="false" />
                                <span className=""></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.formGroup}>
                                <label>Email address: <span className={styles.requiredDisplay}>*</span></label>
                                <input className="" type="email" aria-label="Email" name="email" aria-required="false" placeholder="Email *" aria-invalid="false" />
                                <span className=""></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.formGroup}>
                                <button>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    {
                        loading ? <Loading center={true} customClass={styles.loading} /> : ""
                    }
                </form>
                <p className={styles.mailingListCdc}>
                    By creating an account you agree to Briscoes <Link href="https://www.briscoes.co.nz/shopping-online/privacy/">Privacy Policy</Link> and <Link href="https://www.briscoes.co.nz/shopping-online/terms-and-conditions/">Terms of Use</Link>
                </p>
            </div>
            <div className={styles.payment}>
                <Image src={paymentImg1} alt="Payment" priority={false} width={115} height={26} />
                <Image src={paymentImg2} alt="Payment" priority={false} width={115} height={26} />
                <Image src={paymentImg3} alt="Payment" priority={false} width={115} height={26} />
                <Image src={paymentImg4} alt="Payment" priority={false} width={115} height={26} />
                <Image src={paymentImg5} alt="Payment" priority={false} width={115} height={26} />
                <Image src={paymentImg6} alt="Payment" priority={false} width={115} height={26} />
                <Image src={paymentImg7} alt="Payment" priority={false} width={115} height={26} />
                <Image src={paymentImg8} alt="Payment" priority={false} width={115} height={26} />
            </div>
        </div>
    )
}
