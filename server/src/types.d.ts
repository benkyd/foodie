
export interface IReqFoodItem {
    name: string;
    price: number;
    barcode: string;
}

export interface IFoodItem {
    id: string;
    name: string;
    price: number;
    barcode: string;
}


export interface ISimpleProduct {
    brand_name: string;
    name: string;
    image_url: string;
    food_groups: string[];
    ingredients: Ingredient[];
    nutrients: Nutriments;
    packaging: string;
    serving_size: string;
}

// this is for the api ennit
export interface BarcodeResponse {
    code:           string;
    product:        Product;
    status:         number;
    status_verbose: string;
}

export interface Product {
    _id?:                                                                            string;
    _keywords?:                                                                      string[];
    added_countries_tags?:                                                           any[];
    additives_debug_tags?:                                                           string[];
    additives_n?:                                                                    number;
    additives_old_n?:                                                                number;
    additives_old_tags?:                                                             string[];
    additives_original_tags?:                                                        string[];
    additives_prev_original_tags?:                                                   string[];
    additives_tags?:                                                                 string[];
    additives_tags_n?:                                                               null;
    allergens?:                                                                      string;
    allergens_from_ingredients?:                                                     string;
    allergens_from_user?:                                                            string;
    allergens_hierarchy?:                                                            any[];
    allergens_lc?:                                                                   string;
    allergens_tags?:                                                                 any[];
    amino_acids_prev_tags?:                                                          any[];
    amino_acids_tags?:                                                               any[];
    brands?:                                                                         string;
    brands_tags?:                                                                    string[];
    categories?:                                                                     string;
    categories_hierarchy?:                                                           string[];
    categories_lc?:                                                                  string;
    categories_old?:                                                                 string;
    categories_properties?:                                                          CategoriesProperties;
    categories_properties_tags?:                                                     string[];
    categories_tags?:                                                                string[];
    category_properties?:                                                            CategoryProperties;
    checkers_tags?:                                                                  any[];
    ciqual_food_name_tags?:                                                          string[];
    cities_tags?:                                                                    any[];
    code?:                                                                           string;
    codes_tags?:                                                                     string[];
    compared_to_category?:                                                           string;
    complete?:                                                                       number;
    completeness?:                                                                   number;
    correctors_tags?:                                                                string[];
    countries?:                                                                      string;
    countries_hierarchy?:                                                            string[];
    countries_lc?:                                                                   string;
    countries_tags?:                                                                 string[];
    created_t?:                                                                      number;
    creator?:                                                                        string;
    data_quality_bugs_tags?:                                                         any[];
    data_quality_errors_tags?:                                                       any[];
    data_quality_info_tags?:                                                         string[];
    data_quality_tags?:                                                              string[];
    data_quality_warnings_tags?:                                                     string[];
    data_sources?:                                                                   string;
    data_sources_tags?:                                                              string[];
    debug_param_sorted_langs?:                                                       string[];
    ecoscore_data?:                                                                  EcoscoreData;
    ecoscore_extended_data?:                                                         EcoscoreExtendedData;
    ecoscore_extended_data_version?:                                                 string;
    ecoscore_grade?:                                                                 EcoscoreGrade;
    ecoscore_score?:                                                                 number;
    ecoscore_tags?:                                                                  EcoscoreGrade[];
    editors?:                                                                        string[];
    editors_tags?:                                                                   string[];
    emb_codes?:                                                                      string;
    emb_codes_20141016?:                                                             string;
    emb_codes_orig?:                                                                 string;
    emb_codes_tags?:                                                                 any[];
    entry_dates_tags?:                                                               string[];
    expiration_date?:                                                                string;
    food_groups?:                                                                    string;
    food_groups_tags?:                                                               string[];
    "fruits-vegetables-nuts_100g_estimate"?:                                         number;
    generic_name?:                                                                   string;
    generic_name_en?:                                                                string;
    id?:                                                                             string;
    image_front_small_url?:                                                          string;
    image_front_thumb_url?:                                                          string;
    image_front_url?:                                                                string;
    image_ingredients_small_url?:                                                    string;
    image_ingredients_thumb_url?:                                                    string;
    image_ingredients_url?:                                                          string;
    image_nutrition_small_url?:                                                      string;
    image_nutrition_thumb_url?:                                                      string;
    image_nutrition_url?:                                                            string;
    image_small_url?:                                                                string;
    image_thumb_url?:                                                                string;
    image_url?:                                                                      string;
    images?:                                                                         Images;
    informers_tags?:                                                                 string[];
    ingredients?:                                                                    Ingredient[];
    ingredients_analysis?:                                                           IngredientsAnalysis;
    ingredients_analysis_tags?:                                                      string[];
    ingredients_debug?:                                                              Array<null | string>;
    ingredients_from_or_that_may_be_from_palm_oil_n?:                                number;
    ingredients_from_palm_oil_n?:                                                    number;
    ingredients_from_palm_oil_tags?:                                                 any[];
    ingredients_hierarchy?:                                                          string[];
    ingredients_ids_debug?:                                                          string[];
    ingredients_n?:                                                                  number;
    ingredients_n_tags?:                                                             string[];
    ingredients_original_tags?:                                                      string[];
    ingredients_percent_analysis?:                                                   number;
    ingredients_tags?:                                                               string[];
    ingredients_text?:                                                               string;
    ingredients_text_debug?:                                                         string;
    ingredients_text_en?:                                                            string;
    ingredients_text_with_allergens?:                                                string;
    ingredients_text_with_allergens_en?:                                             string;
    ingredients_that_may_be_from_palm_oil_n?:                                        number;
    ingredients_that_may_be_from_palm_oil_tags?:                                     any[];
    ingredients_with_specified_percent_n?:                                           number;
    ingredients_with_specified_percent_sum?:                                         number;
    ingredients_with_unspecified_percent_n?:                                         number;
    ingredients_with_unspecified_percent_sum?:                                       number;
    interface_version_created?:                                                      string;
    interface_version_modified?:                                                     string;
    known_ingredients_n?:                                                            number;
    labels?:                                                                         string;
    labels_hierarchy?:                                                               string[];
    labels_lc?:                                                                      string;
    labels_tags?:                                                                    string[];
    lang?:                                                                           string;
    languages?:                                                                      Languages;
    languages_codes?:                                                                LanguagesCodes;
    languages_hierarchy?:                                                            string[];
    languages_tags?:                                                                 string[];
    last_edit_dates_tags?:                                                           string[];
    last_editor?:                                                                    string;
    last_image_dates_tags?:                                                          string[];
    last_image_t?:                                                                   number;
    last_modified_by?:                                                               string;
    last_modified_t?:                                                                number;
    lc?:                                                                             string;
    link?:                                                                           string;
    main_countries_tags?:                                                            any[];
    manufacturing_places?:                                                           string;
    manufacturing_places_tags?:                                                      any[];
    max_imgid?:                                                                      string;
    minerals_prev_tags?:                                                             any[];
    minerals_tags?:                                                                  string[];
    misc_tags?:                                                                      string[];
    new_additives_n?:                                                                number;
    no_nutrition_data?:                                                              string;
    nova_group?:                                                                     number;
    nova_group_debug?:                                                               string;
    nova_groups?:                                                                    string;
    nova_groups_tags?:                                                               string[];
    nucleotides_prev_tags?:                                                          any[];
    nucleotides_tags?:                                                               any[];
    nutrient_levels?:                                                                NutrientLevels;
    nutrient_levels_tags?:                                                           string[];
    nutriments?:                                                                     Nutriments;
    nutriscore_data?:                                                                NutriscoreData;
    nutriscore_grade?:                                                               string;
    nutriscore_score?:                                                               number;
    nutriscore_score_opposite?:                                                      number;
    nutrition_data?:                                                                 string;
    nutrition_data_per?:                                                             string;
    nutrition_data_prepared?:                                                        string;
    nutrition_data_prepared_per?:                                                    string;
    nutrition_grade_fr?:                                                             string;
    nutrition_grades?:                                                               string;
    nutrition_grades_tags?:                                                          string[];
    nutrition_score_beverage?:                                                       number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients?:       number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value?: number;
    origins?:                                                                        string;
    origins_hierarchy?:                                                              any[];
    origins_lc?:                                                                     string;
    origins_old?:                                                                    string;
    origins_tags?:                                                                   any[];
    other_nutritional_substances_tags?:                                              any[];
    packaging?:                                                                      string;
    packaging_hierarchy?:                                                            string[];
    packaging_lc?:                                                                   string;
    packaging_old?:                                                                  string;
    packaging_old_before_taxonomization?:                                            string;
    packaging_tags?:                                                                 string[];
    packagings?:                                                                     BarcodeResponsePackaging[];
    photographers_tags?:                                                             string[];
    pnns_groups_1?:                                                                  string;
    pnns_groups_1_tags?:                                                             string[];
    pnns_groups_2?:                                                                  string;
    pnns_groups_2_tags?:                                                             string[];
    popularity_key?:                                                                 number;
    popularity_tags?:                                                                string[];
    product_name?:                                                                   string;
    product_name_en?:                                                                string;
    product_quantity?:                                                               string;
    purchase_places?:                                                                string;
    purchase_places_tags?:                                                           string[];
    quantity?:                                                                       string;
    removed_countries_tags?:                                                         any[];
    rev?:                                                                            number;
    scans_n?:                                                                        number;
    selected_images?:                                                                SelectedImages;
    serving_quantity?:                                                               string;
    serving_size?:                                                                   string;
    sortkey?:                                                                        number;
    states?:                                                                         string;
    states_hierarchy?:                                                               string[];
    states_tags?:                                                                    string[];
    stores?:                                                                         string;
    stores_tags?:                                                                    string[];
    teams?:                                                                          string;
    teams_tags?:                                                                     string[];
    traces?:                                                                         string;
    traces_from_ingredients?:                                                        string;
    traces_from_user?:                                                               string;
    traces_hierarchy?:                                                               string[];
    traces_lc?:                                                                      string;
    traces_tags?:                                                                    string[];
    unique_scans_n?:                                                                 number;
    unknown_ingredients_n?:                                                          number;
    unknown_nutrients_tags?:                                                         any[];
    update_key?:                                                                     string;
    vitamins_prev_tags?:                                                             any[];
    vitamins_tags?:                                                                  any[];
}

export interface CategoriesProperties {
    "agribalyse_food_code:en"?: string;
    "ciqual_food_code:en"?:     string;
}

export interface CategoryProperties {
    "ciqual_food_name:en"?: string;
    "ciqual_food_name:fr"?: string;
}

export interface EcoscoreData {
    adjustments?:          Adjustments;
    agribalyse?:           Agribalyse;
    grade?:                EcoscoreGrade;
    grades?:               { [key: string]: EcoscoreGrade };
    missing?:              Missing;
    missing_data_warning?: number;
    score?:                number;
    scores?:               { [key: string]: number };
    status?:               string;
}

export interface Adjustments {
    origins_of_ingredients?: OriginsOfIngredients;
    packaging?:              AdjustmentsPackaging;
    production_system?:      ProductionSystem;
    threatened_species?:     ThreatenedSpecies;
}

export interface OriginsOfIngredients {
    aggregated_origins?:         AggregatedOrigin[];
    epi_score?:                  number;
    epi_value?:                  number;
    origins_from_origins_field?: string[];
    transportation_scores?:      { [key: string]: number };
    transportation_values?:      { [key: string]: number };
    values?:                     { [key: string]: number };
    warning?:                    string;
}

export interface AggregatedOrigin {
    origin?:  string;
    percent?: number;
}

export interface AdjustmentsPackaging {
    non_recyclable_and_non_biodegradable_materials?: number;
    packagings?:                                     PackagingPackaging[];
    score?:                                          number;
    value?:                                          number;
    warning?:                                        string;
}

export interface PackagingPackaging {
    ecoscore_material_score?:              number;
    ecoscore_shape_ratio?:                 number;
    material?:                             string;
    non_recyclable_and_non_biodegradable?: string;
    shape?:                                string;
}

export interface ProductionSystem {
    labels?:  any[];
    value?:   number;
    warning?: string;
}

export interface ThreatenedSpecies {
}

export interface Agribalyse {
    agribalyse_food_code?: string;
    co2_agriculture?:      number;
    co2_consumption?:      number;
    co2_distribution?:     number;
    co2_packaging?:        number;
    co2_processing?:       number;
    co2_total?:            number;
    co2_transportation?:   number;
    code?:                 string;
    dqr?:                  string;
    ef_agriculture?:       number;
    ef_consumption?:       number;
    ef_distribution?:      number;
    ef_packaging?:         number;
    ef_processing?:        number;
    ef_total?:             number;
    ef_transportation?:    number;
    is_beverage?:          number;
    name_en?:              string;
    name_fr?:              string;
    score?:                number;
}

export enum EcoscoreGrade {
    C = "c",
}

export interface Missing {
    labels?:     number;
    origins?:    number;
    packagings?: number;
}

export interface EcoscoreExtendedData {
    impact?: Impact;
}

export interface Impact {
    ef_single_score_log_stddev?:                  number;
    likeliest_impacts?:                           LikeliestImpacts;
    likeliest_recipe?:                            { [key: string]: number };
    mass_ratio_uncharacterized?:                  number;
    uncharacterized_ingredients?:                 UncharacterizedIngredients;
    uncharacterized_ingredients_mass_proportion?: UncharacterizedIngredientsMassProportionClass;
    uncharacterized_ingredients_ratio?:           UncharacterizedIngredientsMassProportionClass;
    warnings?:                                    string[];
}

export interface LikeliestImpacts {
    Climate_change?:  number;
    EF_single_score?: number;
}

export interface UncharacterizedIngredients {
    impact?:    string[];
    nutrition?: string[];
}

export interface UncharacterizedIngredientsMassProportionClass {
    impact?:    number;
    nutrition?: number;
}

export interface Images {
    "1"?:            The1;
    "2"?:            The1;
    "3"?:            The1;
    "4"?:            The1;
    "5"?:            The1;
    "6"?:            The1;
    "7"?:            The1;
    "8"?:            The1;
    "9"?:            The1;
    "10"?:           The1;
    "12"?:           The1;
    "13"?:           The1;
    front?:          ImagesFront;
    front_en?:       En;
    ingredients?:    ImagesFront;
    ingredients_en?: IngredientsEn;
    nutrition?:      ImagesFront;
    nutrition_en?:   En;
}

export interface The1 {
    sizes?:      Sizes;
    uploaded_t?: number;
    uploader?:   string;
}

export interface Sizes {
    "100"?: The100;
    "400"?: The100;
    full?:  The100;
    "200"?: The100;
}

export interface The100 {
    h?: number;
    w?: number;
}

export interface ImagesFront {
    geometry?:    string;
    imgid?:       string;
    normalize?:   null;
    rev?:         string;
    sizes?:       Sizes;
    white_magic?: null;
    ocr?:         number;
    orientation?: string;
}

export interface En {
    angle?:                  number;
    coordinates_image_size?: string;
    geometry?:               string;
    imgid?:                  string;
    normalize?:              null;
    rev?:                    string;
    sizes?:                  Sizes;
    white_magic?:            null;
    x1?:                     string;
    x2?:                     string;
    y1?:                     string;
    y2?:                     string;
}

export interface IngredientsEn {
    angle?:       string;
    geometry?:    string;
    imgid?:       string;
    normalize?:   string;
    rev?:         string;
    sizes?:       Sizes;
    white_magic?: string;
    x1?:          string;
    x2?:          string;
    y1?:          string;
    y2?:          string;
}

export interface Ingredient {
    id?:                  string;
    percent_estimate?:    number;
    percent_max?:         number;
    percent_min?:         number;
    rank?:                number;
    text?:                string;
    vegan?:               string;
    vegetarian?:          string;
    has_sub_ingredients?: string;
    processing?:          string;
}

export interface IngredientsAnalysis {
    "en:palm-oil-content-unknown"?: string[];
    "en:vegan-status-unknown"?:     string[];
}

export interface Languages {
    "en:english"?: number;
}

export interface LanguagesCodes {
    en?: number;
}

export interface NutrientLevels {
    fat?:             string;
    salt?:            string;
    "saturated-fat"?: string;
    sugars?:          string;
}

export interface Nutriments {
    carbohydrates?:                                              number;
    carbohydrates_100g?:                                         number;
    carbohydrates_serving?:                                      number;
    carbohydrates_unit?:                                         string;
    carbohydrates_value?:                                        number;
    energy?:                                                     number;
    "energy-kcal"?:                                              number;
    "energy-kcal_100g"?:                                         number;
    "energy-kcal_serving"?:                                      number;
    "energy-kcal_unit"?:                                         string;
    "energy-kcal_value"?:                                        number;
    "energy-kj"?:                                                number;
    "energy-kj_100g"?:                                           number;
    "energy-kj_serving"?:                                        number;
    "energy-kj_unit"?:                                           string;
    "energy-kj_value"?:                                          number;
    energy_100g?:                                                number;
    energy_serving?:                                             number;
    energy_unit?:                                                string;
    energy_value?:                                               number;
    fat?:                                                        number;
    fat_100g?:                                                   number;
    fat_serving?:                                                number;
    fat_unit?:                                                   string;
    fat_value?:                                                  number;
    fiber?:                                                      number;
    fiber_100g?:                                                 number;
    fiber_serving?:                                              number;
    fiber_unit?:                                                 string;
    fiber_value?:                                                number;
    "fruits-vegetables-nuts-estimate-from-ingredients_100g"?:    number;
    "fruits-vegetables-nuts-estimate-from-ingredients_serving"?: number;
    "monounsaturated-fat"?:                                      number;
    "monounsaturated-fat_100g"?:                                 number;
    "monounsaturated-fat_label"?:                                string;
    "monounsaturated-fat_serving"?:                              number;
    "monounsaturated-fat_unit"?:                                 string;
    "monounsaturated-fat_value"?:                                number;
    "nova-group"?:                                               number;
    "nova-group_100g"?:                                          number;
    "nova-group_serving"?:                                       number;
    "nutrition-score-fr"?:                                       number;
    "nutrition-score-fr_100g"?:                                  number;
    "polyunsaturated-fat"?:                                      number;
    "polyunsaturated-fat_100g"?:                                 number;
    "polyunsaturated-fat_label"?:                                string;
    "polyunsaturated-fat_serving"?:                              number;
    "polyunsaturated-fat_unit"?:                                 string;
    "polyunsaturated-fat_value"?:                                number;
    proteins?:                                                   number;
    proteins_100g?:                                              number;
    proteins_serving?:                                           number;
    proteins_unit?:                                              string;
    proteins_value?:                                             number;
    salt?:                                                       number;
    salt_100g?:                                                  number;
    salt_serving?:                                               number;
    salt_unit?:                                                  string;
    salt_value?:                                                 number;
    "saturated-fat"?:                                            number;
    "saturated-fat_100g"?:                                       number;
    "saturated-fat_serving"?:                                    number;
    "saturated-fat_unit"?:                                       string;
    "saturated-fat_value"?:                                      number;
    sodium?:                                                     number;
    sodium_100g?:                                                number;
    sodium_serving?:                                             number;
    sodium_unit?:                                                string;
    sodium_value?:                                               number;
    sugars?:                                                     number;
    sugars_100g?:                                                number;
    sugars_serving?:                                             number;
    sugars_unit?:                                                string;
    sugars_value?:                                               number;
}

export interface NutriscoreData {
    energy?:                                                number;
    energy_points?:                                         number;
    energy_value?:                                          number;
    fiber?:                                                 number;
    fiber_points?:                                          number;
    fiber_value?:                                           number;
    fruits_vegetables_nuts_colza_walnut_olive_oils?:        number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points?: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value?:  number;
    grade?:                                                 string;
    is_beverage?:                                           number;
    is_cheese?:                                             number;
    is_fat?:                                                number;
    is_water?:                                              number;
    negative_points?:                                       number;
    positive_points?:                                       number;
    proteins?:                                              number;
    proteins_points?:                                       number;
    proteins_value?:                                        number;
    saturated_fat?:                                         number;
    saturated_fat_points?:                                  number;
    saturated_fat_ratio?:                                   number;
    saturated_fat_ratio_points?:                            number;
    saturated_fat_ratio_value?:                             number;
    saturated_fat_value?:                                   number;
    score?:                                                 number;
    sodium?:                                                number;
    sodium_points?:                                         number;
    sodium_value?:                                          number;
    sugars?:                                                number;
    sugars_points?:                                         number;
    sugars_value?:                                          number;
}

export interface BarcodeResponsePackaging {
    material?: string;
    shape?:    string;
}

export interface SelectedImages {
    front?:       SelectedImagesFront;
    ingredients?: SelectedImagesFront;
    nutrition?:   SelectedImagesFront;
}

export interface SelectedImagesFront {
    display?: Display;
    small?:   Display;
    thumb?:   Display;
}

export interface Display {
    en?: string;
}
