import React from 'react'
import "../Style/PreNavbar.css"

const chart = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg>


const PreNavbar = () => {
    return (
        <div className="preNav">
            <div className='div_1'>
                <a href="https://www.mi.com/pk/">XIAOMI PAKISTAN</a> <span>|</span>
                <a href="https://new.c.mi.com/pk">MI COMMUNITY</a> <span>|</span>
                <a href="https://en.miui.com/">MIUI</a> <span>|</span>
                <a href="https://event.mi.com/global/xiaomistudios">XIAOMI STUDIO</a> <span>|</span>
            </div>

            <div className='div_2'>
                <a href="https://buy.mi.com/pk/site/login">SIGN IN</a> <span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fpk%2Flogin%2Fcallback%3Fsign%3DYlfWc79ekc%252B%252FGft3ZLKsxFhJRlI%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_pk_pc_pro%26sid%3Di18n_pk_pc_pro&amp;sid=i18n_pk_pc_pro&amp;lsrp_checkPwd=true&amp;_ssign=v5QFRsb2k8OFna9Qa873Ej3H52o%3D">SIGN UP</a> <span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fpk%2Flogin%2Fcallback%3Fsign%3DYlfWc79ekc%252B%252FGft3ZLKsxFhJRlI%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_pk_pc_pro%26sid%3Di18n_pk_pc_pro&amp;sid=i18n_pk_pc_pro&amp;lsrp_checkPwd=true&amp;_ssign=v5QFRsb2k8OFna9Qa873Ej3H52o%3D">{chart} </a> <span> Cart (0) |</span>

            </div>
        </div>
    )
}

export default PreNavbar