import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactCards extends Schema.Component {
  collectionName: 'components_contact_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ContactContactHero extends Schema.Component {
  collectionName: 'components_contact_contact_heroes';
  info: {
    displayName: 'Contact Hero';
  };
  attributes: {
    title_first_line: Attribute.String & Attribute.Required;
    title_second_line: Attribute.String;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ContactList extends Schema.Component {
  collectionName: 'components_contact_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    list: Attribute.String & Attribute.Required;
  };
}

export interface FooterLinks extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    link_name: Attribute.String;
    url: Attribute.String;
  };
}

export interface FooterSocialLinks extends Schema.Component {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    link_name: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ProfileAbout extends Schema.Component {
  collectionName: 'components_profile_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    about_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    image: Attribute.Media;
  };
}

export interface ProfileBooksCard extends Schema.Component {
  collectionName: 'components_profile_books_cards';
  info: {
    displayName: 'Books Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    author: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 260;
      }>;
    image: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface ProfileBooks extends Schema.Component {
  collectionName: 'components_profile_books';
  info: {
    displayName: 'Books';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    books_card: Attribute.Component<'profile.books-card', true>;
  };
}

export interface ProfileCertificationsList extends Schema.Component {
  collectionName: 'components_profile_certifications_lists';
  info: {
    displayName: 'Certifications List';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    author: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    cta: Attribute.String;
    cta_slug: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ProfileCertifications extends Schema.Component {
  collectionName: 'components_profile_certifications';
  info: {
    displayName: 'Certifications';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    certifications_list: Attribute.Component<
      'profile.certifications-list',
      true
    >;
  };
}

export interface ProfileEducationCard extends Schema.Component {
  collectionName: 'components_profile_education_cards';
  info: {
    displayName: 'Education Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subject: Attribute.String;
    duration: Attribute.String;
    courses: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    slug: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface ProfileEducation extends Schema.Component {
  collectionName: 'components_profile_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    education_card: Attribute.Component<'profile.education-card', true>;
  };
}

export interface ProfileExperienceList extends Schema.Component {
  collectionName: 'components_profile_experience_lists';
  info: {
    displayName: 'Experience List';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    logo: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface ProfileExperience extends Schema.Component {
  collectionName: 'components_profile_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    experience_list: Attribute.Component<'profile.experience-list', true>;
  };
}

export interface ProfileExpertiseCard extends Schema.Component {
  collectionName: 'components_profile_expertise_cards';
  info: {
    displayName: 'Expertise Card';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    card_slug: Attribute.String;
  };
}

export interface ProfileExpertise extends Schema.Component {
  collectionName: 'components_profile_expertise';
  info: {
    displayName: 'Expertise';
    description: '';
  };
  attributes: {
    espertise_card: Attribute.Component<'profile.expertise-card', true>;
    section_head: Attribute.Component<'profile.section-starter'>;
  };
}

export interface ProfileFaqItem extends Schema.Component {
  collectionName: 'components_profile_faq_items';
  info: {
    displayName: 'Faq Item';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
    faq_id: Attribute.String & Attribute.Required;
  };
}

export interface ProfileFaq extends Schema.Component {
  collectionName: 'components_profile_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    faq_item: Attribute.Component<'profile.faq-item', true>;
  };
}

export interface ProfileFollowMeCard extends Schema.Component {
  collectionName: 'components_profile_follow_me_cards';
  info: {
    displayName: 'Follow me Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    short_description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    icon: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface ProfileFollowMe extends Schema.Component {
  collectionName: 'components_profile_follow_mes';
  info: {
    displayName: 'Follow me';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    follow_me_card: Attribute.Component<'profile.follow-me-card', true>;
  };
}

export interface ProfileGallery extends Schema.Component {
  collectionName: 'components_profile_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    images: Attribute.Media;
  };
}

export interface ProfileHero extends Schema.Component {
  collectionName: 'components_profile_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    profile_image: Attribute.Media & Attribute.Required;
    cover_image: Attribute.Media & Attribute.Required;
    tags: Attribute.Component<'profile.profile-tags', true>;
    cta: Attribute.String;
    cta_slug: Attribute.String;
  };
}

export interface ProfileHighlightsCard extends Schema.Component {
  collectionName: 'components_profile_highlights_cards';
  info: {
    displayName: 'Highlights Card';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    stat: Attribute.String;
  };
}

export interface ProfileHighlights extends Schema.Component {
  collectionName: 'components_profile_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    highlights_card: Attribute.Component<'profile.highlights-card', true>;
  };
}

export interface ProfileIndustriesCard extends Schema.Component {
  collectionName: 'components_profile_industries_cards';
  info: {
    displayName: 'Industries Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    logos: Attribute.Media;
    card_slug: Attribute.String;
  };
}

export interface ProfileIndustries extends Schema.Component {
  collectionName: 'components_profile_industries';
  info: {
    displayName: 'Industries';
    description: '';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    industries_card: Attribute.Component<'profile.industries-card', true>;
  };
}

export interface ProfileInterestItem extends Schema.Component {
  collectionName: 'components_profile_interest_items';
  info: {
    displayName: 'Interest Item';
  };
  attributes: {
    interest_title: Attribute.String & Attribute.Required;
    color_code: Attribute.String & Attribute.Required;
  };
}

export interface ProfileInterest extends Schema.Component {
  collectionName: 'components_profile_interests';
  info: {
    displayName: 'Interest';
    description: '';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    interest_list: Attribute.Component<'profile.interest-item', true>;
  };
}

export interface ProfileMembershipList extends Schema.Component {
  collectionName: 'components_profile_membership_lists';
  info: {
    displayName: 'Membership List';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface ProfileMembership extends Schema.Component {
  collectionName: 'components_profile_memberships';
  info: {
    displayName: 'Membership';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    membership_list: Attribute.Component<'profile.membership-list', true>;
  };
}

export interface ProfileMentorsCard extends Schema.Component {
  collectionName: 'components_profile_mentors_cards';
  info: {
    displayName: 'Mentors Card';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    specification: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 130;
      }>;
    image: Attribute.Media;
    slug: Attribute.String;
  };
}

export interface ProfileMentors extends Schema.Component {
  collectionName: 'components_profile_mentors';
  info: {
    displayName: 'Mentors';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    mentors_card: Attribute.Component<'profile.mentors-card', true>;
  };
}

export interface ProfileProfileTags extends Schema.Component {
  collectionName: 'components_profile_profile_tags';
  info: {
    displayName: 'Profile Tags';
  };
  attributes: {
    tag: Attribute.String;
  };
}

export interface ProfileSectionStarter extends Schema.Component {
  collectionName: 'components_profile_section_starters';
  info: {
    displayName: 'Section starter';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
  };
}

export interface ProfileServicesCard extends Schema.Component {
  collectionName: 'components_profile_services_cards';
  info: {
    displayName: 'Services Card';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 130;
      }>;
    slug: Attribute.String;
  };
}

export interface ProfileServices extends Schema.Component {
  collectionName: 'components_profile_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    services_card: Attribute.Component<'profile.services-card', true>;
  };
}

export interface ProfileSlidingTab extends Schema.Component {
  collectionName: 'components_profile_sliding_tabs';
  info: {
    displayName: 'Sliding Tab';
  };
  attributes: {};
}

export interface ProfileTestimonialsCard extends Schema.Component {
  collectionName: 'components_profile_testimonials_cards';
  info: {
    displayName: 'Testimonials Card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 320;
      }>;
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface ProfileTestimonials extends Schema.Component {
  collectionName: 'components_profile_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    testimonials_card: Attribute.Component<'profile.testimonials-card', true>;
  };
}

export interface ProfileTools extends Schema.Component {
  collectionName: 'components_profile_tools';
  info: {
    displayName: 'Tools';
  };
  attributes: {
    section_head: Attribute.Component<'profile.section-starter'>;
    images: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.cards': ContactCards;
      'contact.contact-hero': ContactContactHero;
      'contact.list': ContactList;
      'footer.links': FooterLinks;
      'footer.social-links': FooterSocialLinks;
      'profile.about': ProfileAbout;
      'profile.books-card': ProfileBooksCard;
      'profile.books': ProfileBooks;
      'profile.certifications-list': ProfileCertificationsList;
      'profile.certifications': ProfileCertifications;
      'profile.education-card': ProfileEducationCard;
      'profile.education': ProfileEducation;
      'profile.experience-list': ProfileExperienceList;
      'profile.experience': ProfileExperience;
      'profile.expertise-card': ProfileExpertiseCard;
      'profile.expertise': ProfileExpertise;
      'profile.faq-item': ProfileFaqItem;
      'profile.faq': ProfileFaq;
      'profile.follow-me-card': ProfileFollowMeCard;
      'profile.follow-me': ProfileFollowMe;
      'profile.gallery': ProfileGallery;
      'profile.hero': ProfileHero;
      'profile.highlights-card': ProfileHighlightsCard;
      'profile.highlights': ProfileHighlights;
      'profile.industries-card': ProfileIndustriesCard;
      'profile.industries': ProfileIndustries;
      'profile.interest-item': ProfileInterestItem;
      'profile.interest': ProfileInterest;
      'profile.membership-list': ProfileMembershipList;
      'profile.membership': ProfileMembership;
      'profile.mentors-card': ProfileMentorsCard;
      'profile.mentors': ProfileMentors;
      'profile.profile-tags': ProfileProfileTags;
      'profile.section-starter': ProfileSectionStarter;
      'profile.services-card': ProfileServicesCard;
      'profile.services': ProfileServices;
      'profile.sliding-tab': ProfileSlidingTab;
      'profile.testimonials-card': ProfileTestimonialsCard;
      'profile.testimonials': ProfileTestimonials;
      'profile.tools': ProfileTools;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
