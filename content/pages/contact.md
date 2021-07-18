---
title: Contact
hide_title: false
sections:
  - title: lorem-ipsum
    section_id: lorem-ipsum
    subtitle: lorem-ipsum
    image_alt: lorem-ipsum
    content: >
      Hi there! Thank you so much for your interest in working together. Generic
      online forms aren't the best UX - so why don't we speak on the usual
      social media first? Of course, if you are determined, I invite you to book
      a call where my calendar allows:
    type: section_content
  - section_id: contact-form
    type: section_form
    content: >
      Hi there! Thank you so much for your interest in working together. Generic
      online forms aren't the best UX - so why don't we speak on the usual
      social media first? Of course, if you are determined, I invite you to book
      a call where my calendar allows:
    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
    submit_label: Send Message
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: advanced
---
