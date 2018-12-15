/**
 * Class exposing configuration constants
 *
 * Via:
 *
 * https://develop.battle.net/documentation/guides/using-oauth
 * https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import regions from './localization/regions';
import locales from './localization/locales';
import defaultLocales from './localization/defaultLocales';
import hosts from './api/hosts';
import sc2Realms from './localization/sc2Realms';
import authorizeUris from './oauth/authorizeUris';
import tokenUris from './oauth/tokenUris';
import checkTokenUris from './oauth/checkTokenUris';

export default class CONSTANTS {
  public static readonly REGIONS = regions;
  public static readonly LOCALES = locales;
  public static readonly DEFAULT_LOCALES = defaultLocales;
  public static readonly REGION_API_HOSTS = hosts;
  public static readonly SC2_REALMS = sc2Realms;
  public static readonly OAUTH_AUTHORIZE_URIS = authorizeUris;
  public static readonly OAUTH_TOKEN_URIS = tokenUris;
  public static readonly OAUTH_CHECK_TOKEN_URIS = checkTokenUris;
}
