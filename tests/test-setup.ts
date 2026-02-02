import { test as base } from '@playwright/test';

const test = base

test.beforeEach(async ()=>
{
    console.log("Hello Playwright Hook")
})


export {test}