import { Suspense } from "beth-stack/jsx";
import { Elysia } from "elysia";
import { authed } from "../auth/middleware";
import { BaseHtml } from "../components/base";
import { InitialTweetList, TweetCreationForm } from "../components/tweets";
import { ctx } from "../context";

export const index = new Elysia()
  .use(ctx)
  .derive(async (ctx) => {
    const authRequest = ctx.auth.handleRequest(ctx);
    const session = await authRequest.validate();

    return { session };
  })
  .get("/", async ({ htmlStream, session, db }) => {
    return htmlStream(() => (
      <BaseHtml>
        <div class="flex-col overflow-hidden relative flex min-h-[1199px] px-20 max-md:px-5">
          <img loading="lazy" srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b8232ba-72b7-499a-8796-7e0ce8f07684?apiKey=540ec016a1be4b518ee902598049130c&" class="absolute z-[-1] h-full w-full object-cover object-center inset-0" />
          <section class="relative self-center flex w-full max-w-[1570px] items-start justify-between gap-5 mt-36 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div class="flex w-[738px] max-w-full items-start justify-between gap-5 self-start max-md:flex-wrap">
              <h2 class="text-white text-2xl font-medium grow shrink basis-auto self-start">
                <span class="font-bold text-indigo-500">Step 1 :</span>
                <span class="font-bold text-white"></span>
                <span class="font-medium text-white">Create Metamask</span>
              </h2>
              <div class="items-center flex flex-col self-start">
                <h2 class="text-white text-2xl font-medium self-stretch whitespace-nowrap">
                  <span class="font-bold text-indigo-500">Step 2 :</span>
                  <span class="font-bold text-white"></span>
                  <span class="font-medium text-white">Connect Telegram</span>
                </h2>
                <div class="bg-white self-center w-[55px] h-px mt-1.5"></div>
              </div>
            </div>
            <h2 class="text-white text-2xl font-medium">
              <span class="font-bold text-indigo-500">Step 3 :</span>
              <span class="font-bold text-white"></span>
              <span class="font-medium text-white">Explore</span>
            </h2>
            <h2 class="text-white text-2xl font-medium whitespace-nowrap self-start">
              <span class="font-bold text-indigo-500">Step 4 :</span>
              <span class="font-medium text-white">Ment Hero NTF</span>
            </h2>
          </section>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e452ed0-b623-44d1-a5d8-3f363c9cc7ec?apiKey=540ec016a1be4b518ee902598049130c&" class="aspect-[21.05] object-contain object-center w-full overflow-hidden self-center max-w-[1663px] mt-11 max-md:max-w-full max-md:mt-10" />
          <div class="relative border border-[color:var(--Green,#72FFA2)] self-center flex w-[646px] max-w-full flex-col mt-48 mb-80 pt-11 pb-8 px-20 border-solid max-md:my-10 max-md:px-5">
            <div class="self-center flex w-[373px] max-w-full flex-col">
              <h2 class="text-white text-center text-2xl font-semibold self-stretch whitespace-nowrap">
                Enter your telegram nickname
              </h2>
              <div class="bg-emerald-200 self-stretch flex w-full flex-col mt-7 px-20 py-5 max-md:px-5">
                <div class="text-zinc-500 text-xl self-center whitespace-nowrap">@nickname</div>
              </div>
              <button class="text-white text-lg font-medium uppercase self-center whitespace-nowrap justify-center items-center bg-indigo-500 w-[114px] max-w-full grow mt-6 px-8 py-5 rounded-[100px] max-md:px-5">
                Enter
              </button>
            </div>
          </div>
        </div>
      </BaseHtml>
    ));
  });
