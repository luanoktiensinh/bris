'use client';

import styles from './Subscribe.module.scss';
import { useSubscribe } from "./useSubscribe";
import { Loading } from '@/components/Loading';

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
                    By creating an account you agree to Briscoes <a href="https://www.briscoes.co.nz/shopping-online/privacy/">Privacy Policy</a> and <a href="https://www.briscoes.co.nz/shopping-online/terms-and-conditions/">Terms of Use</a>
                </p>
            </div>
        </div>
    )
}
