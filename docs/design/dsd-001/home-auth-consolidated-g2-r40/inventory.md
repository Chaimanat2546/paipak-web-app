# G2-r40: annotated inventory

DSD-001/C2 · 5 พฤศจิกายน 2026 · 57 native references · รอตรวจรับG2รวม

ใช้ฟอร์มล่าสุดร่วมกับfield/state patternsที่เจ้าของรับ ไม่ใช่ทุกcombinationมีภาพเต็มแยก รหัสnativeอ้างในpapaipak-ui.penผ่านPencil MCP; [JSON](inventory.json) มีannotationครบ

| กลุ่ม / กรณี | Native ID | ใช้เป็น | หลักฐานรับรายส่วน |
|---|---|---|---|
| Login / email_entry | `Nlwvr` | current_modal | [หลักฐาน](../home-auth-login-country-g2-r34/owner-Login-country-acceptance.json) |
| Login / phone_entry | `w5F1PX` | current_modal | [หลักฐาน](../home-auth-login-country-g2-r34/owner-Login-country-acceptance.json) |
| Login / email_OTP_entry | `ASYeh` | current_modal | [หลักฐาน](../home-auth-login-country-g2-r34/owner-Login-country-acceptance.json) |
| Login / phone_password | `yzbLX` | current_modal | [หลักฐาน](../home-auth-login-country-g2-r34/owner-Login-country-acceptance.json) |
| Login / email_password_alternative | `mmSkV` | current_modal | [หลักฐาน](../home-auth-login-flow-g2-r30/owner-Login-structure-acceptance.json) |
| Login requests / OTP_initial_request_pending | `wp6Gt` | current_modal | [หลักฐาน](../home-auth-login-request-g2-r37/owner-Login-request-states-acceptance.json) |
| Login requests / OTP_initial_request_connection | `TYi9y` | current_modal | [หลักฐาน](../home-auth-login-request-g2-r37/owner-Login-request-states-acceptance.json) |
| Login requests / password_pending | `fS0KD` | current_modal | [หลักฐาน](../home-auth-login-request-g2-r37/owner-Login-request-states-acceptance.json) |
| Login requests / password_connection | `F5y0ir` | current_modal | [หลักฐาน](../home-auth-login-request-g2-r37/owner-Login-request-states-acceptance.json) |
| Login field and credential errors / identifier_required | `JfzOo` | accepted_field_or_form_feedback_pattern | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Login field and credential errors / password_required | `M8MQzW` | accepted_field_or_form_feedback_pattern | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Login field and credential errors / credential_pair_rejected | `WOc19` | accepted_field_or_form_feedback_pattern | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Login OTP / checking | `PmCdx` | accepted_OTP_state_pattern | [หลักฐาน](../home-auth-otp-auto-g2-r7/owner-checking-state-acceptance.json) |
| Login OTP / invalid_inline | `wxEwE` | accepted_OTP_state_pattern | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Login OTP / expired_inline | `iLmVt` | accepted_OTP_state_pattern | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Login OTP / resend_pending | `LRyGj` | accepted_OTP_state_pattern | [หลักฐาน](../home-auth-otp-resend-g2-r10/owner-resend-states-acceptance.json) |
| Login OTP / resend_failed | `cZWL1` | accepted_OTP_state_pattern | [หลักฐาน](../home-auth-otp-resend-failure-g2-r11/owner-resend-failure-acceptance.json) |
| Login OTP / countdown_only | `E3yBs` | accepted_OTP_state_pattern | [หลักฐาน](../home-auth-otp-countdown-only-g2-r14/owner-countdown-only-acceptance.json) |
| Login OTP / verification_service_failure | `d0PtEH` | accepted_OTP_state_pattern | [หลักฐาน](../home-auth-otp-verify-failure-g2-r15/owner-verification-failure-acceptance.json) |
| Login OTP / backspace_sequence | `Im1AA` | accepted_input_sequence | [หลักฐาน](../home-auth-otp-backspace-g2-r16/owner-backspace-sequence-acceptance.json) |
| Google Login / cancelled_return | `EjvEz` | accepted_return_pattern | [หลักฐาน](../home-auth-google-g2-r17/owner-Google-cancellation-acceptance.json) |
| Google Login / provider_failure | `O8qX1q` | accepted_form_feedback_pattern | [หลักฐาน](../home-auth-google-g2-r18/owner-Google-error-acceptance.json) |
| Register / normal | `l93v3` | current_modal | [หลักฐาน](../home-auth-register-country-labels-g2-r33/owner-country-labels-acceptance.json) |
| Register / country_picker | `ZWbVr` | current_modal | [หลักฐาน](../home-auth-register-country-labels-g2-r33/owner-country-labels-acceptance.json) |
| Register / foreign_country | `MOl8x` | current_modal | [หลักฐาน](../home-auth-register-country-labels-g2-r33/owner-country-labels-acceptance.json) |
| Register Username / characters | `oLTL6` | accepted_field_pattern | [หลักฐาน](../home-auth-register-username-g2-r31/owner-Username-states-acceptance.json) |
| Register Username / minimum | `XQeCZ` | accepted_field_pattern | [หลักฐาน](../home-auth-register-username-g2-r31/owner-Username-states-acceptance.json) |
| Register Username / maximum | `uU39o` | accepted_field_pattern | [หลักฐาน](../home-auth-register-username-g2-r31/owner-Username-states-acceptance.json) |
| Register current states / submitting | `vLCXH` | current_modal | [หลักฐาน](../home-auth-register-current-g2-r39/owner-Register-current-states-acceptance.json) |
| Register current states / known_connection | `NKyzd` | current_modal | [หลักฐาน](../home-auth-register-current-g2-r39/owner-Register-current-states-acceptance.json) |
| Register current states / required_Username_phone | `EoViL` | current_modal | [หลักฐาน](../home-auth-register-current-g2-r39/owner-Register-current-states-acceptance.json) |
| Register current states / password_minimum_mismatch | `VVLL4` | current_modal | [หลักฐาน](../home-auth-register-current-g2-r39/owner-Register-current-states-acceptance.json) |
| Google Register / cancelled | `fbdV2` | current_modal | [หลักฐาน](../home-auth-register-google-g2-r35/owner-Register-Google-return-acceptance.json) |
| Google Register / failed | `HR7KI` | current_modal | [หลักฐาน](../home-auth-register-google-g2-r35/owner-Register-Google-return-acceptance.json) |
| Local email verification / dismissible_reminder | `vDPf8` | accepted_local_signup_state | [หลักฐาน](../home-auth-email-verification-g2-r19/owner-reminder-acceptance.json) |
| Local email verification / OTP_entry | `RukQJ` | current_modal | [หลักฐาน](../home-auth-email-verification-otp-g2-r20/owner-verification-screens-acceptance.json) |
| Local email verification / success | `ip2bA` | current_modal | [หลักฐาน](../home-auth-email-verification-otp-g2-r20/owner-verification-screens-acceptance.json) |
| Local email verification / invalid_inline | `Cb1DW` | current_modal | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Local email verification / checking | `nQ4yF` | current_modal | [หลักฐาน](../home-auth-email-verification-states-g2-r36/owner-verification-states-acceptance.json) |
| Local email verification / expired | `s0dZ8` | current_modal | [หลักฐาน](../home-auth-email-verification-states-g2-r36/owner-verification-states-acceptance.json) |
| Local email verification / resend_pending | `lNeof` | current_modal | [หลักฐาน](../home-auth-email-verification-states-g2-r36/owner-verification-states-acceptance.json) |
| Local email verification / countdown | `CsOgQ` | current_modal | [หลักฐาน](../home-auth-email-verification-states-g2-r36/owner-verification-states-acceptance.json) |
| Local email verification / resend_failed | `n8M20` | current_modal | [หลักฐาน](../home-auth-email-verification-states-g2-r36/owner-verification-states-acceptance.json) |
| Local email verification / verify_failed | `LsUq3` | current_modal | [หลักฐาน](../home-auth-email-verification-states-g2-r36/owner-verification-states-acceptance.json) |
| Recovery / forgot_request | `tJxL1` | current_modal | [หลักฐาน](../home-auth-recovery-g2-r1/owner-forgot-request-acceptance.json) |
| Recovery / generic_ack | `IvrCQ` | current_modal | [หลักฐาน](../home-auth-recovery-g2-r2/owner-acknowledgement-acceptance.json) |
| Recovery / reset_form | `ZsOMo` | current_modal | [หลักฐาน](../home-auth-recovery-g2-r1/owner-reset-form-acceptance.json) |
| Recovery / reset_success | `MKMGi` | current_modal | [หลักฐาน](../home-auth-recovery-g2-r1/owner-reset-success-acceptance.json) |
| Recovery / unusable_link | `l0YcM` | current_modal | [หลักฐาน](../home-auth-recovery-g2-r1/owner-unusable-link-acceptance.json) |
| Recovery errors / forgot_required | `a2w6D` | current_modal | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Recovery errors / reset_short_mismatch | `WAeyG` | current_modal | [หลักฐาน](../home-auth-error-audit-r26/owner-error-audit-acceptance.json) |
| Recovery requests / forgot_pending | `e90Mg` | current_modal | [หลักฐาน](../home-auth-recovery-request-g2-r38/owner-Recovery-request-states-acceptance.json) |
| Recovery requests / forgot_connection | `wmhoz` | current_modal | [หลักฐาน](../home-auth-recovery-request-g2-r38/owner-Recovery-request-states-acceptance.json) |
| Recovery requests / reset_pending | `WQbH9` | current_modal | [หลักฐาน](../home-auth-recovery-request-g2-r38/owner-Recovery-request-states-acceptance.json) |
| Recovery requests / reset_connection | `rhTqa` | current_modal | [หลักฐาน](../home-auth-recovery-request-g2-r38/owner-Recovery-request-states-acceptance.json) |
| Favorite return / pending | `xB6Hu` | accepted_cropped_feedback_pattern | [หลักฐาน](../home-auth-favorite-return-g2-r28/owner-favorite-return-states-acceptance.json) |
| Favorite return / saved | `e65FIF` | accepted_cropped_feedback_pattern | [หลักฐาน](../home-auth-favorite-return-g2-r28/owner-favorite-return-states-acceptance.json) |

ฟอร์มปัจจุบันคือr30/r33/r34 StateRegisterล่าสุดr39, Login request-r37, Recovery request-r38, verification-r36 ยังคงsnapshots/approvalsเก่าไม่แก้ย้อนหลัง

r26ใช้field/feedback patternsกับcurrent formในกรณีที่ระบุ ไม่ยกwhole-modalเก่าเป็นcountryformปัจจุบัน Usernamechar/min/maxใช้เฉพาะgroup-r31 ไม่คืนThai fixtures Favorite-r28เป็นcrop ไม่อนุมัติตำแหน่งtoastเต็มหน้าหรือเวลา และr29ที่ถูกปฏิเสธยังซ่อน

Interactionใหม่อ่าน [snapshot draft-1](interaction-contract.reviewed.md.txt) และ [ภาพ](geey5.png) เป็นส่วนที่เสนอรับพร้อมG2-r40 Focus appearance/hover/show-hide visualในแบรนด์/viewport prototype/GoogleHigh-Fi assetsและfull-page favorite feedbackยังตรวจในG3 ไม่ถือว่าอนุมัติหน้าตาปลายทางแล้ว

No-email/phone/password credentialsเป็นข้อมูลตัวอย่าง; new-passwordขั้นต่ำ8ไม่ใช้กับรหัสLoginเดิม จำนวนประเทศ/การnormalizeจริง/account matching/provider/OTP timingและruntimeยังแยกไว้
