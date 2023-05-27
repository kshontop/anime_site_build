import { ICarousel, ITopVfAnime, ITopVostfrAnime } from "@/@types/anime";
import * as cheerio from "cheerio";

class VostFree {
  private readonly baseUrl: string = "https://vostfree.in";
  constructor() { }

  async getCarouselAnime() {
    try {
      const res = await fetch(this.baseUrl);
      const $ = cheerio.load(await res.text());
      let result: ICarousel[] = [];
      let url = this.baseUrl;
      $(".image-bg").each(function() {
        let imageBgStyle = $(this).attr("style");
        let poster = $(this).find("img").attr("src");
        let title = $(this).find("h2").text();
        let link = $(this).find("h2").children("a").attr("href");
        let type = $(this).find(".year").text();
        let description = $(this).find(".slider-desc").text();
        let released = $(this).find(".slider-top").find("a").eq(0).text();

        console.log(imageBgStyle);
        result.push({
          cover: imageBgStyle?.match(/url\((.*?)\)/)?.[1],
          poster: `${url}${poster}`,
          title,
          link,
          type,
          description,
          released,
        });
      });
      return result;
    } catch (error) {
      return [];
    }
  }

  async getTopAnimeVF() {
    try {
      const res = await fetch(this.baseUrl);
      const $ = cheerio.load(await res.text());
      let url = this.baseUrl;
      let result: ITopVfAnime[] = [];
      $("#right-category-block")
        .find("li")
        .each(function() {
          let poster = $(this).children(".image").children("img").attr("src");
          let title = $(this).children(".alt").children("h3").text();
          let link = $(this)
            .children(".alt")
            .children("h3")
            .children("a")
            .attr("href");
          let episode = $(this).children(".episode").text();
          if (title !== "") {
            result.push({
              poster: `${url}${poster}`,
              title,
              link,
              episode,
              type: "VF",
            });
          }
        });
      return result;
    } catch (error) {
      return [];
    }
  }

  async getTopAnimeVOSTFR() {
    try {
      const res = await fetch(this.baseUrl);
      const $ = cheerio.load(await res.text());
      let url = this.baseUrl;
      let result: ITopVostfrAnime[] = [];
      $("#recommended-movies")
        .find("li")
        .each(function() {
          let poster = $(this)
            .children(".movie-hidden")
            .children(".image")
            .children("img")
            .attr("src");
          let title = $(this)
            .children(".movie-hidden")
            .children(".info")
            .children(".title")
            .text();
          let link = $(this).children("a").attr("href");
          if (title !== "") {
            result.push({
              poster: `${url}${poster}`,
              title,
              link,
              type: "VOSTFR",
            });
          }
        });
      return result;
    } catch (error) {
      return [];
    }
  }
}

export default VostFree;
