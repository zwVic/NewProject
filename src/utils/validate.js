/**
 * Created by admin on 2017/7/18.
 */
export function isWscnEmail(str){
    const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wallstreentcn\.com$/i;
    return reg.test(str.trim());
}