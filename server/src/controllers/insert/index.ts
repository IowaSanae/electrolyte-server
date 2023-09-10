
const db = require("../../models/index");
const HomeCategory = require("../../../../data/category_tree.json");
const banner = require("../../../../data/banner.json");
const notify = require("../../../../data/notify.json");
const posts = require(`../../../../data/post.json`)
const shop = require(`../../../../data/shopDetail.json`)
const formatDate = (time: any) => {
  const date = new Date(time * 1000);
  return date.toLocaleString();
};

const InsertControllers = {
  Industries: async (req: any, res: any) => {
    try {
      for (let index = 1; index < 15; index++) {
        const global_cats = require(`../../../../data/cate/cate_${index}.json`)
          .data.global_cats;
        await global_cats.map((item: any, i: any) => {
          for (let j = 0; j < item?.path?.length; j++) {
            insertIndustry(item, j);
          }
        });
      }
      res.status(200).send("Industries processed successfully.");
    } catch (error) {
      console.log("Lỗi hệ thống");
    }
  },



  App: async (req: any, res: any) => {
    try {
      insertHomeCategory();
      insertBanner();
      insertNotify();
      res.status(200).send("app processed successfully.");
    } catch (error) {
      console.log("Lỗi hệ thống", error);
      res.status(500).send("Lỗi hệ thống");
    }
  },

  Comment: async (req: any, res: any) => {
    try {
      // index from 0 - 1939
      const { start, end } = req.params;
      for (let index = start; index < end; index++) {
        const ratings = require(`../../../../data/ratings/rating_${index}.json`)
          .data?.ratings;
        ratings.forEach((item: any) => {
          insertComment(item);
        });
      }
      res.status(200).send("comment processed successfully.");
    } catch (error) {
      console.log("Lỗi hệ thống");
    }
  },

  Post: async (req: any, res: any) => {
    try {
      posts.response.rows.forEach((item: any) => {
        insertPost(item);
        insertAttributes(item);
        insertTierVariations(item);
        insertVideoInfoList(item);
      });
      res.status(200).send("post processed successfully.");
    } catch (error) {
      console.log("Lỗi hệ thống");
    }
  },

  Shop: async (req: any, res: any) => {
    try {
      insertShop(shop);
      res.status(200).send("Shops processed successfully.");
    } catch (error) {
      console.log("Error processing shops:", error);
      res.status(500).send("Lỗi hệ thống.");
    }
  },
};
export default InsertControllers;

const insertPost = (item: any) => {
  db.Post.create(
    {
      itemid: item?.itemid,
      shopid: item?.shopid,
      stock: item?.stock,
      status: item?.status,
      sold: item?.sold,
      promotion_id: item?.promotion_id,
      video_id: item?.video_id,
      discountid: item?.itemid,
      tierid: item?.itemid,
      attributeid: item?.itemid,
      catid: item?.catid,
      cmt_count: item?.cmt_count,
      discount: item?.discount,
      description: item?.description,
      raw_discount: item?.raw_discount,
      shop_name: item?.shop_name,
      transparent_background_image: item?.transparent_background_image,
      images: item?.images,
      view_count: item?.view_count,
      name: item?.name,
      image:
        item?.image === "" ? null : item?.image,
      historical_sold: item?.historical_sold,
      price: +item?.price,
      price_min: +item?.price_min,
      price_max: +item?.price_max,
      price_before_discount: +item?.price_before_discount,
      price_min_before_discount: +item?.price_min_before_discount,
      price_max_before_discount: +item?.price_max_before_discount,
      shop_rating: item?.shop_rating,
      show_free_shipping: item?.show_free_shipping,
      is_attributes: item?.is_attributes,
    },
    { ignoreDuplicates: true }
  );
};

const insertTierVariations = (item: any) => {
  if (item?.tier_variations?.tierid !== null) {
    db.TierVariation.create(
      {
        tierid: item.tier_variations.tierid,
        name: item?.tier_variations.name,
        option: item?.tier_variations?.option,
        images: item?.tier_variations.images
      },
      { ignoreDuplicates: true }
    );
  }
};

const insertAttributes = (item: any) => {
  if (item?.attributes?.attributeid === null && item?.attributes?.name === null) return
  db.Attribute.create(
    {
      attributeid: item?.attributes?.attributeid,
      name: item?.attributes?.attributes,
      value: item?.attributes?.attributes,
    },
    { ignoreDuplicates: true }
  );
};

const insertVideoInfoList = (item: any) => {
  if (item?.catid !== 100644 && item?.catid !== 100013 && item?.catid !== 100635 && item?.catid !== 101455) return
  if (item?.video?.video_id !== null) {
    db.Video.create(
      {
        video_id: item?.video?.video_id,
        thumb_url: item?.video?.thumb_url,
        duration: item?.video?.duration,
        version: item?.video?.version,
        defn: item?.video?.defn,
        profile: item?.video?.profile,
        url: item?.video?.url,
        width: item?.video?.width,
        height: item?.video?.height,
      },
      { ignoreDuplicates: true }
    );
  }
};

const insertNotify = () => {
  notify?.map((item: any) => {
    db.Notification.create({
      userid: item?.userid,
      seen: item?.seen,
      image: item?.image,
      title: item?.title,
      content: item?.content,
      time: item?.time,
    });
  });
};

const insertBanner = () => {
  banner?.data?.space_banners[0]?.banners.map((item: any) => {
    db.Banner.create({
      image_url: `${item?.image_url}`,
    });
  });
};

const insertHomeCategory = () => {
  HomeCategory.data.category_list.map((item: any) => {
    if (item?.catid !== 11036030 && item?.catid !== 11036132 && item?.catid !== 11035954 && item?.catid !== 11036101) return;
    db.HomeCategory.create({
      catid: item?.catid,
      parent_catid: item?.parent_catid,
      name: item?.name,
      display_name: item?.display_name,
      image: `https://cf.shopee.vn/file/${item?.image}`,
      level: item?.level,
    });
    item?.children?.map((ele: any) => {
      db.HomeCategory.create({
        catid: ele?.catid,
        parent_catid: ele?.parent_catid,
        name: ele?.name,
        display_name: ele?.display_name,
        image: `https://cf.shopee.vn/file/${ele?.image}`,
        level: ele?.level,
      });
    });
  });
};

const insertComment = (item: any) => {
  db.Comment.create(
    {
      cmtid: item.cmtid,
      orderid: item?.orderid,
      itemid: item?.itemid,
      rating: item?.rating,
      userid: item?.userid,
      shopid: item?.shopid,
      parent_cmtid: null,
      comment: item?.comment,
      rating_star: item?.rating_star,
      status: item?.status,
      author_username: item?.author_username,
      author_portrait:
        item?.author_portrait === ""
          ? null
          : `https://cf.shopee.vn/file/${item?.author_portrait}`,
      images:
        item?.images?.length > 0
          ? JSON.stringify(
            item?.images?.map((item: any) => {
              return `https://cf.shopee.vn/file/${item}`;
            })
          )
          : null,
      videos: item?.videos?.length >= 0 ? item?.videos[0]?.url : null,
      model_name: item?.product_items[0].model_name,
      is_replied: item.ItemRatingReply === null ? false : true,
      level: 0,
      like_count: item?.like_count ? item?.like_count : 0,
      createdAt: formatDate(item?.mtime),
    },
    { ignoreDuplicates: true }
  );
  if (item.ItemRatingReply !== null) {
    db.Comment.create(
      {
        cmtid: item.cmtid + item?.userid,
        orderid: item?.orderid,
        itemid: item?.itemid,
        rating: null,
        userid: item?.userid,
        shopid: item?.shopid,
        parent_cmtid: item.cmtid,
        comment: item.ItemRatingReply?.comment,
        rating_star: null,
        status: null,
        author_username: null,
        author_portrait: null,
        images: null,
        videos: null,
        model_name: null,
        is_replied: true,
        level: 1,
        like_count: null,
        createdAt: formatDate(item.ItemRatingReply.mtime),
      },
      { ignoreDuplicates: true }
    );
  }
};

const insertShop = (item: any) => {
  db.Shop.create(
    {
      shopid: item?.data?.shopid,
      userid: item?.data?.userid,
      portrait:
        item?.data?.account?.portrait === ""
          ? null
          : `https://cf.shopee.vn/file/${item?.data?.account?.portrait}`,
      username: item?.data?.account?.username,
      item_count: item?.data?.item_count,
      name: item?.data?.name,
      cover:
        item?.data?.cover === ""
          ? null
          : `https://cf.shopee.vn/file/${item?.data?.cover}`,
      status: item?.data?.status,
      description: item?.data?.description,
    },
    { ignoreDuplicates: true }
  );
};

const insertIndustry = (item: any, index: number) => {
  if (item?.path[index]?.category_id !== 100644 && item?.path[index - 1]?.category_id !== 100644 && item?.path[index]?.category_id !== 100013 && item?.path[index - 1]?.category_id !== 100013 && item?.path[index]?.category_id !== 100635 && item?.path[index - 1]?.category_id !== 100635 && item?.path[index]?.category_id !== 101455 && item?.path[index - 1]?.category_id !== 101455) return
  db.Industry.create(
    {
      catid: item?.path[index]?.category_id,
      parent_catid: index === 0 ? null : item?.path[index - 1]?.category_id,
      level: index,
      category_name: item?.path[index]?.category_name,
      images: item?.images[index],
    },
    { ignoreDuplicates: true }
  );
};
