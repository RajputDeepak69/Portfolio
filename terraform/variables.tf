variable "project_name" {
  type    = string
  default = "portfolio"
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "site_bucket_name" {
  type    = string
  default = "my-portfolio-29"
}

variable "domain_name" {
  type        = string
  description = "Optional: full domain (eg. www.example.com). Leave empty to skip Route53 & ACM."
  default     = ""
}

variable "hosted_zone_id" {
  type        = string
  description = "Required if domain_name is set."
  default     = ""
}

variable "sender_email" {
  type        = string
  description = "SES verified sender (if not using domain identity)."
  default     = "100rajpootking100@gmail.com"
}

variable "recipient_email" {
  type        = string
  description = "Recipient of contact form messages."
  default     = "feb29deepak@gmail.com"
}
