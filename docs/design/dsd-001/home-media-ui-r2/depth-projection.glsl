#version 100
precision mediump float;
/** @resolution */
uniform vec2 u_resolution;
/** @label Editable card content */
uniform sampler2D u_content;
/** @label Y rotation radians @default 0.65 */
uniform float u_angle;
/** @label Perspective distance @default 1000 */
uniform float u_distance;
/** @label Plane scale @default 0.92 */
uniform float u_scale;
/** @label Face lighting @default 1 */
uniform float u_light;
void main() {
  vec2 screen = (gl_FragCoord.xy - u_resolution * 0.5) / u_scale;
  float sine = sin(u_angle);
  float cosine = cos(u_angle);
  float denominator = cosine + screen.x * sine / u_distance;
  if (denominator <= 0.05) {
    gl_FragColor = vec4(0.0);
    return;
  }
  float worldX = screen.x / denominator;
  float perspective = 1.0 - worldX * sine / u_distance;
  vec2 uv = (vec2(worldX, screen.y * perspective) + u_resolution * 0.5) / u_resolution;
  if (uv.x < -0.2 || uv.x > 1.2 || uv.y < -0.2 || uv.y > 1.2) {
    gl_FragColor = vec4(0.0);
    return;
  }
  vec4 color = texture2D(u_content, uv);
  gl_FragColor = vec4(color.rgb * u_light, color.a);
}

