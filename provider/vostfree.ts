import {
  ICarousel,
  IEpisodeRecent,
  IPopularAnime,
  ITopVfAnime,
  ITopVostfrAnime,
} from "@/@types/anime";
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
            .text()
            .split(/\r?\n/)[0];
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

  async getLatestVF() {
    try {
      const res = await fetch(this.baseUrl);
      const $ = cheerio.load(await res.text());
      let url = this.baseUrl;
      let result: IEpisodeRecent[] = [];

      $("#content")
        .find(".block")
        .children(".new-episode")
        .each(function() {
          let poster = $(this).children(".image").children("img").attr("src");
          let title = $(this).children(".info").text().trim();
          let link = $(this).find("a").attr("href");
          let episode = $(this).children(".episode").text();
          let released = $(this).children("b").text().trim();

          result.push({
            poster: `${url}${poster}`,
            title,
            link,
            episode,
            released,
            type: "VF",
          });
        });
      return result.splice(0, 6);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getLatestVostfr() {
    try {
      const res = await fetch(this.baseUrl);
      const $ = cheerio.load(await res.text());
      let url = this.baseUrl;
      let result: IEpisodeRecent[] = [];
      $("#content")
        .find(".block.half.last")
        .children(".new-episode")
        .each(function() {
          let poster = $(this).children(".image").children("img").attr("src");
          let title = $(this).children(".info").text().trim();
          let link = $(this).find("a").attr("href");
          let episode = $(this).children(".episode").text();
          let released = $(this).children("b").text().trim();

          result.push({
            poster: `${url}${poster}`,
            title,
            link,
            episode,
            released,
            type: "VOSTFR",
          });
        });

      return result;
    } catch (error) {
      return [];
    }
  }

  async getPopularAnime() {
    try {
      const res = await fetch(this.baseUrl);
      const $ = cheerio.load(await res.text());
      let url = this.baseUrl;
      let result: IPopularAnime[] = [];
      $("#content")
        .eq(2)
        .children(".movie-poster")
        .each(function() {
          let poster = $(this).children(".image").children("img").attr("src");
          let title = $(this).children(".image").children("img").attr("alt");
          let link = $(this).find("a").attr("href");
          let description = $(this).find(".desc").text().trim();
          let type = $(this).children(".quality").text();

          result.push({
            poster: `${url}${poster}`,
            title,
            link,
            description,
            type,
          });
        });

      return result;
    } catch (error) {
      return [];
    }
  }
}

export default VostFree;
